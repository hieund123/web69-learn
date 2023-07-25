import mongoose from "mongoose";

const userInfoSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    numberPhone: String,
    identify: {
        type: String,
        required: true,
        unique: true
    },
    accountId: {
        type: mongoose.Types.ObjectId,
        ref: 'accounts',
        unique: true
    }
});

const UserInfoModel = mongoose.model('userinfors', userInfoSchema);
export default UserInfoModel;