'use strict';

var server = require("server");

server.get("MinhaRota", function (req, res, next) {
    res.json({
        Teste: "Teste",
    });
    return next();
});

module.exports = server.exports();
