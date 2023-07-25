import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "CUSTOMER"
    }
});

const AccountModel = mongoose.model('accounts', accountSchema);
export default AccountModel;