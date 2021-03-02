"use strict";

const Promise = require('bluebird');
const fs = require('fs');

let controller = {
    getPage: function (req, res) {
        res.render('login', { title: 'Login' });
    }
};

module.exports = controller;
