const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type:String,
    },
    username: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    roles: {
        type: Number,
        default: 0
    },
    avatar: {
        type:string
    }
},{
    timestamps: true
})

module.exports = mongoose.model('users',UserSchema)