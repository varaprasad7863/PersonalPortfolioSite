/**
 * FileName : users.js
 * StudentName : Varaprasad Bantaram.
 * Student ID : 301170233
 * Date : 14th Feb 2021.
 * 
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
