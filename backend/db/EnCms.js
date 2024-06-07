const mysql = require("mysql");

const EnCmsDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "en_cms",
});

module.exports = EnCmsDB;
