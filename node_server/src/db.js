const { DataSource } = require('typeorm');
const path = require('path');
const User = require('./models/user.model');

let _dataSource = null;

exports.getDataSource = async function () {
  if (_dataSource && _dataSource.isInitialized) {
    return _dataSource;
  }

  try {
    _dataSource = await new DataSource({
      type: 'sqlite',
      database: path.resolve(__dirname, '../data/data.sqlite'),
      entities: [User],
      logging: process.env.DB_LOG,
      synchronize: process.env.DB_SYNC,
    }).initialize();
    console.log('Connected to db!');
  } catch (err) {
    console.log(`Failed to connect to db!`);
  } finally {
    return _dataSource;
  }
};
