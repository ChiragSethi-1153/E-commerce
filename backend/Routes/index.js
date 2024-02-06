const router= require("express").Router();

router.use("/", require('./Routes'))

module.exports = router;