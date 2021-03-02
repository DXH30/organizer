"use strict";

const Promise = require('bluebird');
const fs = require('fs');

let controller = {
    getPage: function (req, res) {
        res.render('register', { title: 'Register' });
    }
};

module.exports = controller;
