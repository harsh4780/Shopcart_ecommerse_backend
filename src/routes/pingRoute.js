const express = require('express');
const router  = express.Router();

const {pingController} = require('../controller/pingController.js');

router.get('/', pingController);

module.exports = router;