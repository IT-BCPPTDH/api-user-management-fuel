const { setCorsHeaders } = require('./middleware-handler.js')

async function handleResponseJson(res, req, action) {
    setCorsHeaders(res);
    readJson(res, async (requestData) => {
        const result = await action(requestData);
        res.cork(() => {
            res
                .writeStatus(result.status)
                .writeHeader('content-type', 'application/json')
                .end(JSON.stringify(result));
        });
    }, () => {
        res.cork(() => {
            res
                .writeStatus("500")
                .writeHeader('content-type', 'application/json')
                .end(JSON.stringify({ error: 'Invalid JSON or no data at all!' }));
        });
    });
}

async function handleResponseParams(res, req, action, qtyParams) {
    setCorsHeaders(res)

    let result = {}
    
    res.onAborted(() => {
        res.aborted = true;
    });

    if(qtyParams === 1){
        result = await action(req.getParameter(0))
    } else if(qtyParams === 2) {
        result = await action(req.getParameter(0), req.getParameter(1))
    } else {
        result = await action()
    }

    if (!res.aborted) {
        res.cork(() => {
            res
                .writeStatus(result.status)
                .writeHeader('content-type', 'application/json')
                .end(JSON.stringify(result));
        });
    }
}

function readJson(res, cb, err) {
    let buffer;
    res.onData((ab, isLast) => {
      let chunk = Buffer.from(ab);
  
      if (isLast) {
        try {
          let json = buffer ? JSON.parse(Buffer.concat([buffer, chunk])) : JSON.parse(chunk);
          cb(json);
        } catch (e) {
          handleInvalidJson(res);
        }
      } else {
        buffer = buffer ? Buffer.concat([buffer, chunk]) : Buffer.concat([chunk]);
      }
    });
  
    res.onAborted(err);
}

function handleInvalidJson(res) {
    res.end(JSON.stringify({ error: 'Invalid JSON' }));
}

module.exports = {
    handleResponseJson,
    handleResponseParams
}