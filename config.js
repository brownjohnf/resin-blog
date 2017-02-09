// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config,
    dbConfig
    ;

if (process.env.GHOST_DB_ENGINE === "mysql") {
    dbConfig = {
        client: 'mysql',
        connection: {
            host     : process.env.GHOST_DB_HOST,
            port     : process.env.GHOST_DB_PORT,
            user     : process.env.GHOST_DB_USER,
            password : process.env.GHOST_DB_PASSWORD,
            database : process.env.GHOST_DB_NAME,
            charset  : 'utf8'
        }
    };
} else {
    dbConfig = {
        client: 'sqlite3',
        connection: {
            filename: process.env.GHOST_SQLITE_PATH
        },
        debug: false
    };
}

ghostConfig = {
        url: process.env.GHOST_URL,
    paths: {
        contentPath: process.env.GHOST_DATA_PATH
    },
    mail: {},
    database: dbConfig,
    server: {
        // Host to be passed to node's `net.Server#listen()`
        host: '0.0.0.0',
        // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
        port: process.env.GHOST_PORT
    }
};

config = { production: ghostConfig, development: ghostConfig };

// Export config
module.exports = config;
