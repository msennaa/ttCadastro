"use strict";
require("dotenv/config");
const config = {
    username: 'root',
    password: '12345678',
    database: 'employees',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z'
    },
    logging: false,
};
module.exports = config;
