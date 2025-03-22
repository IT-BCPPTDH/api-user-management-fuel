const db = require('../database/helper');
const {encrypter} = require('../helpers/bcryptHelper')
const roleData = require('../data-json/user_role.json')
// const userJson = require('../data-json/user-ptdh.json')
const userJson = require('../data-json/user-example.json')

const { HTTP_STATUS, STATUS_MESSAGE } = require('../helpers/enumHelper')
const { QUERY_STRING } = require('../helpers/queryEnumHelper')

async function createUser(userData) {
  const newUser = { ...userData };
  const password = newUser.password ? newUser.password : "abcd1234"
  const password_hash = encrypter(password);

  try {
    let inserted = await db.query(QUERY_STRING.CREATE_USER,
      [newUser.JDE, newUser.fullname, newUser.position, newUser.division, password_hash]);

    if (inserted) {
      const user = await getUser(inserted.rows[0].create_user)  
      return {
        status: HTTP_STATUS.OK,
        message: STATUS_MESSAGE.SUCCESS_CREATE_USER,
        data: user.success ? user.data : {}
      };
    }
  } catch (error) {
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.ERR_CREATE_USER} ${error}`,
    };
  }
}

async function getUser(userId) {
  try {
    const result = await db.query(QUERY_STRING.GET_USER_BY_ID, [userId]);
    return {
      success: true,
      status: HTTP_STATUS.OK,
      data: result.rows[0]
    }
  } catch (error) {
    return {
      success: false,
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.FAILED_GET_USER} ${error}`,
    };
  }
}

async function getAllUsers() {
  try {
    const result = await db.query(QUERY_STRING.GET_ALL_USER);
    return {
      status: HTTP_STATUS.OK,
      data: result.rows
    }
  } catch (error) {
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.FAILED_GET_ALL_USER} ${error}`,
    };
  }
}

async function getUsersPaginated(pageNum, pageSize) {
  try {
    const result = await db.query(QUERY_STRING.GET_USER_PAGINATED, [pageNum, pageSize]);
    return {
      status: HTTP_STATUS.OK,
      data: result.rows
    }
  } catch (error) {
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.FAILED_PAGINATED_USER} ${error}`,
    };
  }
}

async function updateUser(updatedData) {
  try {
    const params = [];
    params.push(updatedData.userId || null);
    params.push(updatedData.JDE || null);
    params.push(updatedData.fullname || null);
    params.push(updatedData.position || null);
    params.push(updatedData.division || null);

    await db.query(QUERY_STRING.UPDATE_USER,params);

    const user = await getUser(updatedData.userId); 

    return {
      status: HTTP_STATUS.OK,
      data: user.success ? user.data : {},
      message: STATUS_MESSAGE.SUCCESS_UPDATE_USER
    }
  } catch (error) {
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.ERR_UPDATE_USER} ${error}`,
    };
  }
}

async function deleteUser(userId) {
  try {
    const deletionResult = await db.query(QUERY_STRING.DELETE_USER, [userId]);
    return {
      status: HTTP_STATUS.OK,
      data: deletionResult.rows[0].delete_user,
      message: STATUS_MESSAGE.SUCCESS_DEL_USER
    }
  } catch (error) {
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.ERR_DEL_USER} ${error}`,
    };
  }
}

async function bulkInsert(){
  for (let index = 0; index < userJson.length; index++) {
    const element = userJson[index];
    const inserted = await createUser(element)
  }

  return {
    status: HTTP_STATUS.OK,
    message: STATUS_MESSAGE.SUCCESS_CREATE_USER
  }
}

async function getOperator() {
  try {
    const result = await db.query(QUERY_STRING.GET_MASTER_OPERATOR);
    
    return {
      success: true,
      status: HTTP_STATUS.OK,
      data: result.rows,
      totalRow: result.rows.length
    }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.FAILED_GET_USER} ${error}`,
    };
  }
}

async function getRoles(userId) {
  try {
    const result = await db.query(QUERY_STRING.GET_USER_ROLE_BY_ID, [userId]);
    return {
      success: true,
      status: HTTP_STATUS.OK,
      data: result.rows[0]
    }
  } catch (error) {
    return {
      success: false,
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.FAILED_GET_USER} ${error}`,
    };
  }
}

async function updateRoles(updatedData) {
  try {
    const { user_id, ...fieldsToUpdate } = updatedData;
    const columns = Object.keys(fieldsToUpdate);
    const values = Object.values(fieldsToUpdate);
    const setClause = columns.map((col, i) => `${col} = $${i + 1}`).join(', ');

    const updateQuery = `UPDATE users_roles SET ${setClause} WHERE user_id = $${columns.length + 1}`;
    values.push(user_id);  

    const res = await db.query(updateQuery, values);

    if (res.rowCount === 0) {  
      const insertColumns = ['user_id', ...columns];
      const insertValues = [user_id, ...values.slice(0, values.length - 1)];
      const insertPlaceholders = insertColumns.map((_, i) => `$${i + 1}`).join(', ');

      const insertQuery = `INSERT INTO users_roles (${insertColumns.join(', ')}) VALUES (${insertPlaceholders})`;
      
      await db.query(insertQuery, insertValues);
    }

    const dataRole = await getRoles(user_id)

    return {
      status: HTTP_STATUS.OK,
      data: dataRole.success ? dataRole.data : {},
      message: STATUS_MESSAGE.SUCCESS_UPDATE_USER
    };
  } catch (error) {
    console.error(error);
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.ERR_UPDATE_USER} ${error.message}`,
    };
  }
}

async function getUserJDE(arrayData) {
  try {
    const result = await db.query(QUERY_STRING.GET_USER_BY_JDE, [arrayData]);
    return {
      success: true,
      status: HTTP_STATUS.OK,
      data: result.rows
    }
  } catch (error) {
    return {
      success: false,
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.FAILED_GET_USER} ${error}`,
    };
  }
}

async function updateOperator(arrayData){
  try {
    const { id, jde, fullname, position, division, ...rest1 } = arrayData;
    const userIdToDivision = { userId: id, jde, fullname, position, division };

    const { breakdown, admin, timeentry, production, coalhauling, weather } = rest1;
    const userIdToBreakdownAndAdmin = {user_id:id, breakdown, admin, timeentry, production, coalhauling, weather };

    const editUser = await updateUser(userIdToDivision)
    const editRoles = await updateRoles(userIdToBreakdownAndAdmin)

    let combinedData;
    if(editUser){
      combinedData = {
        data: {
          ...editUser.data,
          ...editRoles.data
        }
      };
    }

    return {
      status: HTTP_STATUS.OK,
      data : combinedData,
      message: STATUS_MESSAGE.SUCCESS_UPDATE_USER
    };
  } catch (error) {
    console.error(error);
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.ERR_UPDATE_USER} ${error.message}`,
    };
  }
}

async function getAllRoles() {
  try {
    const result = await db.query(QUERY_STRING.GET_ALL_USER_ROLES);
    return {
      status: HTTP_STATUS.OK,
      data: result.rows
    }
  } catch (error) {
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.FAILED_GET_ALL_USER} ${error}`,
    };
  }
}

async function updateExistingRole(){
  try{
    if (!roleData || typeof roleData !== 'object') {
      console.error('Data is missing or invalid');
      return;
    }

    for (const [column, jde] of Object.entries(roleData)) {
      
      if (!Array.isArray(jde) || jde.length === 0) {
          console.warn(`No valid entries for column: ${column}`);
          continue;
      }
      const placeholders = jde.map((_, index) => `$${index + 1}`).join(', ');
      const updateQuery = `
          UPDATE users_roles
          SET ${column} = true
          FROM users as u
          WHERE u.id = users_roles.user_id
          AND u."JDE" IN (${placeholders});
      `;
      await db.query(updateQuery, jde);
    }
    return {
      status: HTTP_STATUS.OK,
      message: STATUS_MESSAGE.SUCCESS_UPDATE_USER
    }
  }catch(error){
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.ERR_UPDATE_USER} ${error}`,
    };
  }
}

async function getUserFuel() {
  try {
    const result = await db.query(QUERY_STRING.GET_USER_FUEL);
    return {
      status: HTTP_STATUS.OK,
      data: result.rows
    }
  } catch (error) {
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.FAILED_GET_ALL_USER} ${error}`,
    };
  }
}

async function createUserAndRole(userData) {
  const newUser = { ...userData };
  const password = newUser.password ? newUser.password : "abcd1234"
  const password_hash = encrypter(password);

  try {
    let inserted = await db.query(QUERY_STRING.CREATE_USER,
      [newUser.JDE, newUser.fullname, newUser.position, newUser.division, password_hash]);
    
    if (inserted) {
      const user = await getUser(inserted.rows[0].create_user)
      const { fuelman, admin_fuel, ...rest } = userData;
      const newData = {user_id:user.data.id, ...(fuelman !== undefined && { fuelman }), ...(admin_fuel !== undefined && { admin_fuel })};

      await updateRoles(newData)
      return {
        status: HTTP_STATUS.OK,
        message: STATUS_MESSAGE.SUCCESS_CREATE_USER,
        data: user.success ? user.data : {}
      };
    }
  } catch (error) {
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.ERR_CREATE_USER} ${error}`,
    };
  }
}

async function updateFuelman(arrayData){
  try {
    const { id, jde, fullname, position, division, ...rest1 } = arrayData;
    const userIdToDivision = { userId: id, JDE:jde, fullname, position, division };

    const { fuelman, admin_fuel } = rest1;
    const userIdToBreakdownAndAdmin = {user_id:id, fuelman, admin_fuel };

    const editUser = await updateUser(userIdToDivision)
    const editRoles = await updateRoles(userIdToBreakdownAndAdmin)

    let combinedData;
    if(editUser){
      combinedData = {
        data: {
          ...editUser.data,
          ...editRoles.data
        }
      };
    }

    return {
      status: HTTP_STATUS.OK,
      message: STATUS_MESSAGE.SUCCESS_UPDATE_USER
    };
  } catch (error) {
    console.error(error);
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.ERR_UPDATE_USER} ${error.message}`,
    };
  }
}

async function createEmpFuel(userData) {
  try {
    const newUser = { ...userData };
    const password = newUser.password ? newUser.password : "abcd1234"
    const password_hash = encrypter(password);
  try {
    const check = await db.query(QUERY_STRING.GET_OPERATOR_JDE, [userData.JDE])
    let inserted
    if(check.rowCount == 0){
      inserted = await db.query(QUERY_STRING.CREATE_USER,
      [newUser.JDE, newUser.fullname, newUser.position, newUser.division, password_hash]);
    }
    const user = check.rows[0].id
    const { fuelman, admin_fuel, ...rest } = userData;
    const newData = {user_id:user, ...(fuelman !== undefined && { fuelman }), ...(admin_fuel !== undefined && { admin_fuel })};
    await updateRoles(newData)
    return {
      status: HTTP_STATUS.OK,
      message: STATUS_MESSAGE.SUCCESS_CREATE_USER,
      data: user.success ? user.data : {}
    };
  } catch (error) {
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.ERR_CREATE_USER} ${error}`,
    };
  }
  } catch (error) {
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.FAILED_GET_ALL_USER} ${error}`,
    };
  }
}

async function getFuelEmployee() {
  try {
    const result = await db.query(QUERY_STRING.GET_USER_FUEL_ADMIN);
    return {
      status: HTTP_STATUS.OK,
      data: result.rows
    }
  } catch (error) {
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.FAILED_GET_ALL_USER} ${error}`,
    };
  }
}

module.exports = { 
  createUser, 
  getUser, 
  getAllUsers, 
  getUsersPaginated, 
  updateUser, 
  deleteUser, 
  bulkInsert,
  getOperator, 
  updateRoles,
  getRoles,
  getUserJDE,
  updateOperator,
  getAllRoles,
  updateExistingRole,
  getUserFuel,
  createUserAndRole,
  updateFuelman,
  getFuelEmployee,
  createEmpFuel
};