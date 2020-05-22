import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        preco: Sequelize.FLOAT,
        quantidade: Sequelize.INTEGER,
        barra: Sequelize.STRING,
        promocao: Sequelize.FLOAT,
        validade: Sequelize.DATE,
      },
      {
        sequelize,
        modelName: 'estoque',
        tableName: 'estoque',
      }
    );     
    return this;
  }
}

export default Product;