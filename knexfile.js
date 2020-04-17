
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
      }

};