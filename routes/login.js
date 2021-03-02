'use strict';

const ctrl = require('../controllers/login.controller.js');

var express = require('express');
var router = express.Router();

router.get('/', ctrl.getPage);

module.exports = router;
