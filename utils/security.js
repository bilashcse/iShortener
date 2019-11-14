const shortId = require('shortid');
const moment = require('moment');
const mysql = require('promise-mysql');

const configs = require('../configs/default');

async function connect() {
  const con = await mysql.createConnection(configs);
  return con;
}


const encrypt = async (url) => {
  const con = await connect();
  try {
    const hash = shortId.generate();
    await con.query(`
      INSERT INTO url_map
      SET
      HASH_ID = '${hash}',
      URL = '${url.trim()}',
      CREATED_AT = '${moment().format('YYYY-MM-DD HH:mm:ss')}'
    `);

    await con.end();
    return hash;
  } catch (err) {
    await con.end();
    throw new Error(err);
  }
};

const decrypt = async (hash) => {
  const con = await connect();
  try {
    const result = await con.query(`SELECT URL FROM url_map WHERE HASH_ID = '${hash}'`);
    await con.end();
    return result[0].URL;
  } catch (err) {
    await con.end();
    throw new Error(err);
  }
};


module.exports = {
  encrypt,
  decrypt,
};
