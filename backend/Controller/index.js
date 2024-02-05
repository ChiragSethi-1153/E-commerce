const controller = require("express").Router();
router.use("/", require('./user.controller'))
module.exports = controller;