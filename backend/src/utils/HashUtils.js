const bcrypt = require('bcryptjs');

module.exports = {
  async generateHash(senha) {
    return bcrypt.hash(senha, 8);
  },
  async validateHash(senha, hash) {
    return bcrypt.compare(senha, hash);
  }
};
