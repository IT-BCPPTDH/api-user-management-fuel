const db = require('../database/helper');
const {encrypter} = require('../helpers/bcryptHelper')
const userJson = require('../data-json/user-ptdh.json')
const { HTTP_STATUS, STATUS_MESSAGE } = require('../helpers/enumHelper')
const { QUERY_STRING } = require('../helpers/queryEnumHelper')

async function createUser(userData) {
  const newUser = { ...userData };
  const password = newUser.password ? newUser.password : "abcd1234"
  const password_hash = encrypter(password);

  try {
    const inserted = await db.query(QUERY_STRING.CREATE_USER,
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
    // console.log(inserted)
  }

  return {
    status: HTTP_STATUS.OK,
    message: STATUS_MESSAGE.SUCCESS_CREATE_USER
  }
}

async function getOperator() {
  try {
    const result = await db.query(QUERY_STRING.GET_MASTER_OPERATOR);
    console.log(result)
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
    values.push(user_id);  // user_id as the last value for the update query

    const res = await db.query(updateQuery, values);

    if (res.rowCount === 0) {  // Check for no rows affected
      const insertColumns = ['user_id', ...columns];
      const insertValues = [user_id, ...values.slice(0, values.length - 1)];
      const insertPlaceholders = insertColumns.map((_, i) => `$${i + 1}`).join(', ');

      const insertQuery = `INSERT INTO users_roles (${insertColumns.join(', ')}) VALUES (${insertPlaceholders})`;
      
      await db.query(insertQuery, insertValues);
    }

    const user = await getUser(user_id); // Ensure the correct variable is used

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
  getRoles
};