import productsRoute from './products.js';

const routes = (app) => {
  app.get('/', (req, res) => {
    res.send('Hello, this is your Express API!');
  });

  app.use('/products', productsRoute);
};

export default routes;
