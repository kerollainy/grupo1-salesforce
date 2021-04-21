'use strict';
var base = module.superModule;
module.exports = function fullProduct(product, apiProduct, options) {
var above18AttributeDecorator = require('*/cartridge/models/product/decorators/above18');
base.call(this, product, apiProduct, options);
above18AttributeDecorator(product, apiProduct);
return product;
};
