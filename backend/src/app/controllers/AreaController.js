const connection = require('../../database/connection');
module.exports = {
  async index(request, response) {
    const areas = await connection('areas').select('*');

    return response.json(areas);
  }
};
