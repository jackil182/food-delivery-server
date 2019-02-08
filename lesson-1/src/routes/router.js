const productsRoute = require('./products/products');
const signupRoute = require('./signup/signup');
const mainRoute = require('./main/main');

const router = {
    '/signup': signupRoute,
    '/products': productsRoute,
    default: mainRoute
}

module.exports = router;