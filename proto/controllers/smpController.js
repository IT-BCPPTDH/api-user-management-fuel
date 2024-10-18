const db = require('../../database/helper');
const { QUERY_STRING } = require('../../helpers/queryEnumHelper');

const getUserByIdProto = async(call,callback) => {
    console.log(11,call.request)
    const dataUser = await db.query(QUERY_STRING.GET_USER_BY_JDE1, [call.request.id]);
    console.log(22,dataUser.rows)
    if(dataUser.rows.length > 0){
       let data = JSON.stringify(dataUser.rows,null,3)
        
        let result = {data:data}
        callback(null,result)
    }else{
        let result = {data:[]}
        callback(null,result)
    }
}

module.exports = {
    getUserByIdProto
}