// This file uses Knex.js to write sql statements to set up the database.

const knex = require('knex'); // imports knex.js to be used to interface with the database in js like syntax

const knexConfig = require('../knexfile.js'); // imports th external knex file

// we must select the development object from our knexfile
module.exports = knex(knexConfig.development);

