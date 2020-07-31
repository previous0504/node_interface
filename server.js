const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/db')
const morgan = require("morgan")
const colors = require("colors")
const errorHandler = require("./middleware/error")
const app = express();
//配置body解析
app.use(express.json())

//设置跨域请求
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})
// 引入路由文件
const mscamps = require('./routes/mscamps.js')


dotenv.config({
    path: './config/config.env'
})
// 链接数据库
connectDB();
// app.use(logger);
// 使用morgan中间件
app.use(morgan("dev"));
// 挂载路由节点
app.use("/api/v1/mscamps", mscamps)

app.use(errorHandler)

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue))

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error:${err.message}`.red);
    // 关闭服务器
    server.close(() => {
        process.exit(1);
    })
})