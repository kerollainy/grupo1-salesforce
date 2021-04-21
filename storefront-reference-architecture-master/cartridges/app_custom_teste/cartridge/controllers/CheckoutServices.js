'use strict';

var server = require('server');
var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
server.extend(module.superModule);

server.append(
    'SubmitPayment',
    server.middleware.https,
    csrfProtection.validateAjaxRequest,
    function (req, res, next) {
        var apiStockHelper = require('*/cartridge/scripts/helpers/apiStockHelper');
        var BasketMgr = require('dw/order/BasketMgr');
        var currentBasket = BasketMgr.getCurrentBasket();
        var Resource = require('dw/web/Resource');
        var collections = require('*/cartridge/scripts/util/collections');



        var errors = [];
        collections.forEach(currentBasket.productLineItems, function (productLine) {
            var responseObj = apiStockHelper.getStock(productLine.productID);
            if (responseObj && responseObj.totalAvailable < productLine.quantityValue) {
                errors.push(Resource.msgf(
                    'stock.unavailability',
                    'api_stock',
                    null,
                    productLine.productID
                ));
            }
        });

        if (errors.length) {
            // respond with form data and errors
            res.json({
                serverErrors: errors,
                error: true
            });
            return next();
        }

        next();

    }
);

module.exports = server.exports();
