const { Op } = require("sequelize");

import Product from '../models/Product';

class ProductController {
  async show(req, res){
    const products = await Product.findAll({
      where: {
        quantidade: { [Op.gt]: 0 },
      }
    });

    res.json(products)
  }
}

export default new ProductController();