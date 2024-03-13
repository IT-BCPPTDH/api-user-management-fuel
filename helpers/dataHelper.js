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
    readJson
};
