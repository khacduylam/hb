const { EntitySchema } = require('typeorm');
const { USER_MODEL, USER_TABLE } = require('../common/constants');

module.exports = new EntitySchema({
  name: USER_MODEL,
  tableName: USER_TABLE,
  columns: {
    id: { primary: true, type: 'int', generated: 'increment' },
    fullName: { type: 'varchar' },
    age: { type: 'int' },
    sex: { type: 'varchar' },
    createdAt: { createDate: true },
    updatedAt: { updateDate: true },
  },
});
