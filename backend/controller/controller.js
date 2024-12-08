const { updateRefreshTokenInDb } = require('./lib/db-handler');

const handler = async (req, method) => {
  if (method === 'GET') {
    if (req.url === '/pg-update') {
      const tokenToUpdate = 'testing';
      await updateRefreshTokenInDb(tokenToUpdate);
      return 'SUCCESS';
    }
  }
}

module.exports = { handler };