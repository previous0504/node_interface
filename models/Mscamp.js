const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MscampSchema = new Schema({
    name: {
        type: String,
        required: [true, "请填写名字"],
        unique: true,
        trim: true,
        maxlength: [50, "名字不能超过50个字"]
    },
    description: {
        type: String,
        required: [true, "请填写描述"],
    },
    website: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            "请填写合法的网址",
        ],
    },
    phone: {
        type: String,
        match: [/^[1][3,4,5,7,8][0-9]{9}$/, "请填写正确的手机号码"],

    },
    email: {
        type: String,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "请填写正确的邮箱地址",
        ],
    },
    address: {
        type: String
    },
    careers: {
        type: [String],
        required: true,
        enum: ["前端开发", "后端开发", "人工智能", "数据分析"]
    },
    online: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Mscamp', MscampSchema)