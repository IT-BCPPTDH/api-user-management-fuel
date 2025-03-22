const db = require('../database/helper');
const knex = require('../knexfile');
const { QUERY_STRING } = require('../helpers/queryEnumHelper')

const insert = async (dataJson) => {
    try {
        const checkData = await db.query(QUERY_STRING.GET_OPERATOR_JDE, [dataJson.JDE]);

        if (checkData.rows.length > 0) {
            // Jika JDE sudah ada di Table A, ambil ID-nya
            const operatorId = checkData.rows[0].id; 

            // Cek apakah is_operator di Table B (misalnya table `operator_status`)
            const checkOperatorStatus = await db.query(
                `SELECT is_operator_fuel FROM users_roles WHERE user_id = $1`, 
                [operatorId]
            );
        
            if (checkOperatorStatus.rows.length > 0) {
                if (checkOperatorStatus.rows[0].is_operator_fuel) {
                    // Jika is_operator sudah TRUE, skip tambah data
                    return false;
                } else {
                    // Jika is_operator masih FALSE, update menjadi TRUE
                    await db.query(
                        `UPDATE users_roles SET is_operator_fuel = TRUE WHERE user_id = $1`, 
                        [operatorId]
                    );
                    return true;
                }
            } else {
                // Jika tidak ada data di Table B, tambahkan dengan is_operator = TRUE
                await db.query(
                    `INSERT INTO users_roles (user_id, is_operator_fuel) VALUES ($1, TRUE)`, 
                    [operatorId]
                );
                return true;
            }
        } else {
            // Jika JDE belum ada di Table A, tambahkan ke Table A terlebih dahulu
            const sanitizedColumns = Object.keys(dataJson).map(key => `"${key}"`);
            const valuesPlaceholders = sanitizedColumns.map((_, idx) => `$${idx + 1}`).join(', ');
        
            const createOperatorQuery = `
                INSERT INTO users (${sanitizedColumns.join(', ')})
                VALUES (${valuesPlaceholders})
                RETURNING id
            `;
        
            const values = Object.keys(dataJson).map(key => dataJson[key]);
            const result = await db.query(createOperatorQuery, values);
        
            if (result.rows.length > 0) {
                const newOperatorId = result.rows[0].id;
            
                // Tambahkan ke Table B dengan is_operator = TRUE
                await db.query(
                    `INSERT INTO users_roles (user_id, is_operator_fuel) VALUES ($1, TRUE)`, 
                    [newOperatorId]
                );
                return true;
            }
            return false;
        }

    } catch (error) {
        console.log(error)
        return false
    }
}

const edit = async (updateFields) => {
    try {
        const setClauses = Object.keys(updateFields)
        .map((field, index) => {
          const columnName = `"${field}"`;
          return `${columnName} = $${index + 1}`;
        })
        .join(', ');
      
        const values = Object.keys(updateFields)
          .map(field => updateFields[field]);
      
        values.push(updateFields.id);

        const query = `UPDATE users SET ${setClauses} WHERE id = $${values.length}`;
        
        const result = await db.query(query, values)

        if(result){
            return true
        }

        return false

    } catch (error) {
        console.log(error)
        return false
    }
}

const deleteUser = async (userId) => {
    try {
        await db.query("BEGIN");

        // Cek jumlah role user
        const { rows } = await db.query(`SELECT 
                (CASE WHEN breakdown THEN 1 ELSE 0 END) + 
                (CASE WHEN production THEN 1 ELSE 0 END) + 
                (CASE WHEN timeentry THEN 1 ELSE 0 END) + 
                (CASE WHEN coalhauling THEN 1 ELSE 0 END) + 
                (CASE WHEN weather THEN 1 ELSE 0 END) + 
                (CASE WHEN admin THEN 1 ELSE 0 END) + 
                (CASE WHEN fuelman THEN 1 ELSE 0 END) + 
                (CASE WHEN admin_fuel THEN 1 ELSE 0 END) +
                (CASE WHEN spv_fuel THEN 1 ELSE 0 END) +  
                (CASE WHEN is_operator_fuel THEN 1 ELSE 0 END) AS other_true_count
            FROM users_roles 
            WHERE user_id = $1`, [userId]);
        const roleCount = parseInt(rows[0].count, 10);
        if (roleCount > 1) {
            await db.query(`UPDATE users_roles SET is_operator_fuel = FALSE WHERE user_id = $1`, [userId]);
        } else {
            await db.query(`DELETE FROM users_roles WHERE user_id = $1`, [userId]);
            await db.query(`DELETE FROM users WHERE id = $1`, [userId]);
        }

await db.query("COMMIT");
return true;
    } catch (error) {
        await db.query("ROLLBACK"); 
        console.error("Error saat menghapus user:", error);
        return false;
    } 
};


module.exports = {
    insert,
    edit,
    deleteUser
}