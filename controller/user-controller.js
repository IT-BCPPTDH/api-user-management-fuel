const db = require('../database/helper');
const {encrypter} = require('../helpers/bcryptHelper')
const userJson = require('../data-json/user-ptdh.json')

async function createUser(userData) {
  const newUser = { ...userData };
  const password = newUser.password ? newUser.password : "abcd1234"
  const password_hash = encrypter(password);

  try {
    const inserted = await db.query('SELECT public.create_user($1, $2, $3, $4, $5)',
      [newUser.JDE, newUser.fullname, newUser.position, newUser.division, password_hash]);

    if (inserted) {
      return {
        message: "User Created",
        userId: inserted.rows[0].create_user
      };
    }
  } catch (error) {
    console.error('Error creating user:', error);
    return 'Failed to create user';
  }
}

async function getUser(userId) {
  try {
    const result = await db.query('SELECT * FROM user_view WHERE id = $1', [userId]);
    return result.rows[0];
  } catch (error) {
    console.error('Error getting user:', error);
    return 'Failed to retrieve user';
  }
}

async function getAllUsers() {
  try {
    const result = await db.query('SELECT * FROM user_view');
    return result.rows;
  } catch (error) {
    console.error('Error getting all users:', error);
    return 'Failed to retrieve users';
  }
}

async function getUsersPaginated(pageNum, pageSize) {
  try {
    const result = await db.query('SELECT * FROM public.get_users_paginated($1, $2)', [pageNum, pageSize]);
    return result.rows;
  } catch (error) {
    console.error('Error getting users paginated:', error);
    return 'Failed to retrieve users paginated';
  }
}

async function updateUser(userId, updatedData) {
  try {
    const params = [userId];

    params.push(updatedData.JDE || null);
    params.push(updatedData.fullname || null);
    params.push(updatedData.position || null);
    params.push(updatedData.division || null);

    await db.query('SELECT update_user($1, $2, $3, $4, $5)',
      params);

    return await getUser(userId); 
  } catch (error) {
    console.error('Error updating user:', error);
    return 'Failed to update user';
  }
}

async function deleteUser(userId) {
  try {
    const deletionResult = await db.query('SELECT delete_user($1)', [userId]);
    return deletionResult.rows[0].delete_user; 
  } catch (error) {
    console.error('Error deleting user:', error);
    return 'Failed to delete user';
  }
}

async function bulkInsert(){
  return {
    message: "Disabled"
  }
  // for (let index = 0; index < userJson.length; index++) {
  //   const element = userJson[index];
  //   const inserted = await createUser(element)
  //   console.log(inserted)
    
  // }
}

module.exports = { 
  createUser, 
  getUser, 
  getAllUsers, 
  getUsersPaginated, 
  updateUser, 
  deleteUser, 
  bulkInsert 
};