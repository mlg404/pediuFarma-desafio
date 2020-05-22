import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        preco: Sequelize.INTEGER,
        quantidade: Sequelize.INTEGER,
        barra: Sequelize.STRING,
        promocao: Sequelize.DATE,
        inipromo: Sequelize.DATE,
        fimpromo: Sequelize.DATE,
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