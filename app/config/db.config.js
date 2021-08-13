module.exports = {
  HOST: "localhost",
  PORT: "1434",
  USER: "zkoder",
  PASSWORD: "123456",
  DB: "bezkoder_db",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
