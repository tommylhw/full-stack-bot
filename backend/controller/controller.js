const { updateRefreshTokenInDb, executeSQL } = require('./lib/db-handler');


const handler = async (req) => {
  if (req.method === 'GET') {
    if (req.url === '/pg-update') {
      const tokenToUpdate = 'testing';
      await updateRefreshTokenInDb(tokenToUpdate);
      return 'SUCCESS';
    }

    if (req.url === '/api-sql') {
      await excuteSQL('SELECT * FROM key_value_pairs');
      return 'SUCCESS';
    }
  }
}

// const handler = async (sql) => {
//   if (sql) {
//     return await executeSQL(sql);
//   } else {
//     return 'Invalid Request'; // Return an error response for invalid requests
//   }
// }

module.exports = { handler };