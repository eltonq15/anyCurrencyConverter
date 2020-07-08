module.exports = {
    client: 'mysql',
    connection: {
        host: process.env.REACT_APP_DB_HOST,
        port: process.env.REACT_APP_DB_PORT,
        user: process.env.REACT_APP_DB_USER,
        password: process.env.REACT_APP_DB_PSWD,
        database: process.env.REACT_APP_DB_DATABASE,
        charset: 'utf8'
    },
    useNullAsDefault: true
};