const { Pool } = require('pg');

const poolConfig = {
  max: 5,
  min: 2,
  idleTimeoutMillis: 600000,
};

const database = 'postgres';
const username = 'postgres';
const password = '0000';

poolConfig.connectionString = `postgres://${username}:${password}@34.28.149.23:5432/${database}`;

const client = new Pool(poolConfig);

const updateRefreshTokenInDb = async (token) => {
  return new Promise((resolve, reject) => {
    try {
      const query = {
        text: `UPDATE key_value_pairs SET value = $1, created_on = $2, WHERE key = $3`,
        values: [token, new Date(), 'refresh_token'],
      }

      client.query(query, (err, res) => {
        if (err) {
          throw(err);
        }
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = { updateRefreshTokenInDb };


