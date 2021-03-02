'use strict';

const ctrl = require('../controllers/register.controller.js');

module.exports = function(app) {
    app.get('/', ctrl.getPage);
}
