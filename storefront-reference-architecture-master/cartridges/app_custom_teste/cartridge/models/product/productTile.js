'use strict';
var base = module.superModule;
module.exports = function productTile(product, apiProduct, productType) {
var above18AttributeDecorator = require('*/cartridge/models/product/decorators/above18');
base.call(this, product, apiProduct, productType);
above18AttributeDecorator(product, apiProduct);
return product;
};
