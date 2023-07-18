import bcrypt from 'bcrypt';
const resClientData = (res, statusCode, data, message) => {
    res.status(statusCode).send({
        data: data ? data : null,
        message: message ? message : (data ? 'Thành công!' : 'Thất bại!'),
        success: data ? true : false
    });
};
const hashingPassword = (password) => {
    const saltRound = 10;
    const salt = bcrypt.genSaltSync(saltRound);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return {
        hashedPassword,
        salt
    }
}
const comparePassword = (password, salt, hashedPassword) => {
    const hashingPasswordReq = bcrypt.hashSync(password, salt);
    return hashedPassword === hashingPasswordReq;
}
export {
    resClientData,
    hashingPassword,
    comparePassword
}