const db = require('../database/helper');
const { encrypter, decrypter } = require('../helpers/bcryptHelper')
const { getUser } = require('./user-controller')
const { HTTP_STATUS, STATUS_MESSAGE } = require('../helpers/enumHelper')
const { QUERY_STRING } = require('../helpers/queryEnumHelper')

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

async function authUser(user) {
  try {
    const credentials = await getUserCredentials(user.JDE);

    if (!credentials) {
      return {
        status: HTTP_STATUS.NOT_FOUND,
        message: STATUS_MESSAGE.CRED_NOT_FOUND,
      };
    }

    const { user_id, password_hash } = credentials;

    if (decrypter(user.password, password_hash)) {

      const activeSession = await hasActiveSession(user_id);
      const user = await getUser(user_id)

      if (activeSession) {

        return {
          data: user.success ? user.data : {},
          session_token: activeSession.token,
          status: HTTP_STATUS.CREATED,
          message: STATUS_MESSAGE.USER_LOGGEDIN
        };
      } else {
        const session_token = generateSessionToken();
        await saveSessionToken(user_id, session_token);
        await logAuthenticationSuccess(user_id);

        return {
          data: user.success ? user.data : {},
          session_token: session_token,
          status: HTTP_STATUS.OK,
          message: STATUS_MESSAGE.SUCCESS_LOGIN
        };
      }

    } else {
      await logAuthenticationFailure();
      return {
        status: HTTP_STATUS.BAD_REQUEST,
        message: STATUS_MESSAGE.INVALID_JDE
      };
    }
  } catch (error) {
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      message: `${STATUS_MESSAGE.ERR_AUTH} ${error}`,
    };
  }
}

async function hasActiveSession(user_id) {
  const result = await db.query(QUERY_STRING.HAS_ACTIVE_SESS, [user_id]);
  return result.rows.length > 0 ? result.rows[0] : null;
}

async function getUserCredentials(JDE) {
  const result = await db.query(QUERY_STRING.GET_CREDENTIAL, [JDE]);
  return result.rows.length > 0 ? result.rows[0] : null;
}

async function saveSessionToken(user_id, session_token) {
  await db.query(QUERY_STRING.SAVE_SESSION_TOKEN, [user_id, session_token]);
}

async function logAuthenticationSuccess(user_id) {
  await db.query(QUERY_STRING.LOG_AUTH_SUCCESS, [user_id]);
}

async function logAuthenticationFailure() {
  await db.query(QUERY_STRING.LOG_AUTH_FAILED);
}

async function logoutUser(user) {
  try {

    const deleteSessionResult = await db.query(QUERY_STRING.USER_LOGOUT, [user.user_id, user.session_token]);

    if (deleteSessionResult && deleteSessionResult.rowCount > 0) {

      return {
        status: HTTP_STATUS.OK,
        message: STATUS_MESSAGE.SUCCESS_LOGOUT,
      };
    } else {

      return {
        status: HTTP_STATUS.NO_CONTENT,
        message: STATUS_MESSAGE.FAILED_LOGOUT,
      };
    }
  } catch (error) {
    return {
      status: HTTP_STATUS.UNAUTHORIZED,
      message: `${STATUS_MESSAGE.ERR_LOGOUT} ${error}`,
    };
  }
}

async function resetPassword(passwordData) {
  try {
    const hashedPassword = encrypter(passwordData.new_password);
    await db.query(QUERY_STRING.RESET_PASS, [passwordData.user_id, hashedPassword]);
    return {
      status: HTTP_STATUS.OK,
      message: STATUS_MESSAGE.SUCCESS_RESET_PASS
    };
  } catch (error) {
    return {
      status: HTTP_STATUS.BAD_REQUEST,
      error: `${STATUS_MESSAGE.ERR_RESET_PASS} ${error}`
    };
  }
}

module.exports = {
  authUser,
  resetPassword,
  logoutUser
};