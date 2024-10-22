const db = require('../../database/helper');
const { decrypter } = require('../../helpers/bcryptHelper');
const { HTTP_STATUS, STATUS_MESSAGE } = require('../../helpers/enumHelper');
const { QUERY_STRING } = require('../../helpers/queryEnumHelper');
const { client } = require('../../helpers/redisHelper')
const { getUser, getRoles } = require('../../controller/user-controller')


const loginProto = async(call,callback) => {
    let data = null
    let res = null
    try {
        const credentials = await getUserCredentials(call.request.id);
        if (!credentials) {
            console.log(0)
          data =  {
            status: HTTP_STATUS.UNAUTHORIZED,
            message: STATUS_MESSAGE.CRED_NOT_FOUND,
          };
        }
    
        const { user_id, password_hash } = credentials;

        if (decrypter(call.request.password, password_hash)) {
          const activeSession = await hasActiveSession(user_id);
          const user = await getUser(user_id)
          const item = await getRoles(user_id)
    
          if (activeSession) {
            client.set(activeSession.token,JSON.stringify(user.data))
    
            data = {
              data: user.success ? user.data : {},
              access: user.success? item.data : {}, 
              session_token: activeSession.token,
              status: HTTP_STATUS.CREATED,
              message: STATUS_MESSAGE.USER_LOGGEDIN
            };
          } else {
            const session_token = generateSessionToken();
            await saveSessionToken(user_id, session_token);
            await logAuthenticationSuccess(user_id);
    
            client.set(session_token,JSON.stringify(user.data))
    
            data = {
              data: user.success ? user.data : {},
              access: user.success? item.data : {}, 
              session_token: session_token,
              status: HTTP_STATUS.OK,
              message: STATUS_MESSAGE.SUCCESS_LOGIN
            };
          }
    
        } else {
          await logAuthenticationFailure();
          data = {
            status: HTTP_STATUS.NO_CONTENT,
            message: STATUS_MESSAGE.INVALID_JDE
          };
        }
        
        res = JSON.stringify(data,null,3)
        let result = {data:res}
        callback(null,result)
      } catch (error) {
        data = {
          status: HTTP_STATUS.BAD_REQUEST,
          message: `${STATUS_MESSAGE.ERR_AUTH} ${error}`,
        };
        res = JSON.stringify(data,null,3)
        let result = {data:res}
        callback(null,result)
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

module.exports = {
    loginProto
}


