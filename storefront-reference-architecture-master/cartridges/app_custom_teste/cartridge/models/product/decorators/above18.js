'use strict';

module.exports = function (object, apiProduct) {
    Object.defineProperty(object, 'above18', {
        enumerable: true,
        value: apiProduct && apiProduct.custom.above18
        ? apiProduct.custom.above18 : false});
};
