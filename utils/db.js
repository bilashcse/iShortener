const mysql = require('mysql');

const config = {
  connectionLimit: 10,
  hostname: 'localhost',
  username: 'root',
  password: 'root',
  table: 'iShortner',
};

const createConnection = async () => {
  const con = await mysql.createPool(config);
  return con;
};


module.exports = createConnection;
