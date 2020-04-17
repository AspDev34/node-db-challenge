module.exports = {

    // config: {
    //     client: 'sqlite3',
    //     connection: {
    //         filename: './data/projects.db3' //this file path is based off the root of the entire repository, NOT the current working directory or file!
    //     },
    //     useNullAsDefault: true
    // },

    development: {
        // our DBMS driver
        client: 'sqlite3',
        // necessary when using sqlite3
        useNullAsDefault: true,
        // the location of our db
        connection: {
          filename: './data/projects.db3' //this file path is based off the root of the entire repository, NOT the current working directory or file!
        }
      },
      staging: {
        client: 'postgresql',
        connection: {
          database: 'my_db',
          user:     'username',
          password: 'password'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations'
        },
        seeds: {
          directory: './data/seeds',
        }
      },
    
      production: {
        client: 'postgresql',
        connection: {
          database: 'my_db',
          user:     'username',
          password: 'password'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations'
        }
      }

};