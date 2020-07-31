// 引入模型
const Mscamp = require('../models/Mscamp')
const ErrorResponse = require("../utils/errorResponse")
const asyncHandler = require("../middleware/async")

exports.getMscamps = asyncHandler(async (req, res, next) => {
    const mscamps = await Mscamp.find();// 查找所有数据
    res.status(200).json({ success: true, count: mscamps.length, data: mscamps })
})

exports.createMscamps = async (req, res, next) => {
    try {
        const mscamp = await Mscamp.create(req.body)
        res.status(200).json({ success: true, data: mscamp })
    } catch (error) {
        next(error)
    }

}
exports.getMscamp = async (req, res, next) => {
    try {
        const mscamp = await Mscamp.findById(req.params.id);// 查找所有数据
        if (!mscamp) {
            return next(new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404))
        }
        res.status(200).json({ success: true, data: mscamp })
    } catch (error) {
        next(error)
        // res.status(400).json({ success: false, error: error })
        // next(new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404))
    }
}

exports.updateMscamp = async (req, res, next) => {
    try {
        const mscamp = await Mscamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!mscamp) {
            return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: mscamp })
    } catch (error) {
        next(error)
    }
}
exports.deleteMscamp = async (req, res, next) => {
    try {
        const mscamp = await Mscamp.findByIdAndDelete(req.params.id)
        if (!mscamp) {
            return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
    } catch (error) {
        next(error)
    }
}