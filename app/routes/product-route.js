const ProductController = require('../controllers/product-controller');

module.exports = (app) => {
    app.post('/product', ProductController.post);
    app.put('/product/:id', ProductController.put);
    app.delete('/product/:id', ProductController.delete);
    app.get('/products', ProductController.get);
    app.get('/product/:id', ProductController.getById);
}