/**
 * 
 * 
 */
const express = require('express');
const router = express.Router();
//引入控制器
const { getMscamps, createMscamps, getMscamp, updateMscamp, deleteMscamp } = require('../controllers/mscamps.js')

router.route('/').get(getMscamps).post(createMscamps)

router.route("/:id").get(getMscamp).put(updateMscamp).delete(deleteMscamp)
module.exports = router;