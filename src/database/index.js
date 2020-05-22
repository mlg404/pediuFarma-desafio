import Sequelize from 'sequelize';

import dbConfig from '../config/database';

import Product from '../app/models/Product'

const models = [Product];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map(model => model.init(this.connection))
  }
}

export default new Database();