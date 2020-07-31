
// 创建中间件 middleware
const logger = (req, res, next) => {
    // req.data = { msg: '中间中间中间' }
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
module.exports = logger;