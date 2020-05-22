import { Op } from 'sequelize';
import { endOfDay, isBefore } from 'date-fns'
import Product from '../models/Product';

class ProductController {
  async show(req, res){
    const products = await Product.findAll({
      where: {
        quantidade: { [Op.gt]: 0 },
        preco: { [Op.gt]: 0 },
      }
    });

    const stock = [];
    const today = (new Date());
      
    products.map(product => { 
      let newValue =  
        (product.promocao !== 0) && 
        (product.validade !== null) && 
        (isBefore(today, endOfDay(new Date(product.validade)))) && 
        (product.promocao < product.preco) ? product.promocao : product.preco;

      stock.push({ 
        preco: newValue ,
        ean: product.barra,
        estoque: product.quantidade,
      });
    }) 

    res.json(stock)
  }
}

export default new ProductController();