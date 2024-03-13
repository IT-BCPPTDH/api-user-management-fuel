const db = require('../database/helper');
const bcrypt = require('bcrypt');
const { encrypter, decrypter } = require('../helpers/bcryptHelper')

async function authUser(user) {
  try {
    const credentials = await getUserCredentials(user.JDE);

    if (!credentials) {
      return {
        success: false,
        error: 'No user credentials found for the provided JDE.',
      };
    }

    const { user_id, password_hash } = credentials;

    const activeSession = await hasActiveSession(user_id);

    if (activeSession) {
      return {
        success: true,
        user_id: user_id,
        session_token: activeSession.token,
      };
    }

    if (decrypter(user.password, password_hash)) {
      const session_token = generateSessionToken();
      await saveSessionToken(user_id, session_token);
      await logAuthenticationSuccess(user_id);

      return {
        success: true,
        user_id: user_id,
        session_token: session_token,
      };
    } else {
      await logAuthenticationFailure();

      return {
        success: false,
        error: 'Invalid JDE or password',
      };
    }
  } catch (error) {
    console.error('Error authenticating user:', error);
    return {
      success: false,
      error: `Error authenticating user: ${error}`,
    };
  }
}

async function hasActiveSession(user_id) {
  const query = 'SELECT * FROM "users_sessionTokens" WHERE user_id = $1;';
  const params = [user_id];
  const result = await db.query(query, params);
  return result.rows.length > 0 ? result.rows[0] : null;
}

async function getUserCredentials(JDE) {
  const query = 'SELECT * FROM public.get_user_credentials($1);';
  const params = [JDE];
  const result = await db.query(query, params);
  return result.rows.length > 0 ? result.rows[0] : null;
}

async function saveSessionToken(user_id, session_token) {
  const query = 'INSERT INTO "users_sessionTokens" (user_id, token, created_at) VALUES ($1, $2, NOW());';
  const params = [user_id, session_token];
  await db.query(query, params);
}

async function logAuthenticationSuccess(user_id) {
  const query = `INSERT INTO "users_authenticationLogs" (user_id, status, log_timestamp) VALUES ($1, 'success', NOW());`;
  const params = [user_id];
  await db.query(query, params);
}

async function logAuthenticationFailure() {
  const query = `INSERT INTO "users_authenticationLogs" (user_id, status, log_timestamp) VALUES (NULL, 'failure', NOW());`;
  await db.query(query);
}

function generateSessionToken() {
  const tokenLength = 32; 
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  let token = '';
  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }

  return token;
}

async function logoutUser(user) {
  try {
    const deleteSessionQuery = `
      DELETE FROM "users_sessionTokens"
      WHERE user_id = $1 AND token = $2;
    `;
    const deleteSessionParams = [user.user_id, user.session_token];
    const deleteSessionResult = await db.query(deleteSessionQuery, deleteSessionParams);

    if (deleteSessionResult && deleteSessionResult.rowCount > 0) {
   
      return {
        success: true,
        message: 'User logged out successfully',
      };
    } else {
     
      return {
        success: false,
        error: 'Failed to logout user',
      };
    }
  } catch (error) {
    console.error('Error logging out user:', error);
    return {
      success: false,
      error: `Error logging out user: ${error}`,
    };
  }
}

async function resetPassword(passwordData) {
  try {
    const hashedPassword = encrypter(passwordData.new_password);
    await db.query('SELECT public.reset_password($1, $2)', [passwordData.user_id, hashedPassword]);
    return { success: true, message: 'Password reset successful' };
  } catch (error) {
    console.error('Error resetting password:', error);
    return { success: false, error: `Error resetting password: ${error}` };
  }
}

module.exports = {
  authUser,
  resetPassword,
  logoutUser
};