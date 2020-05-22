import { Router } from 'express';

import ProductController from './app/controllers/ProductController';

const routes = new Router(); 

routes.get('/', ProductController.show)

export default routes;