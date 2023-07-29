const resClientData = (res, status, data, message) => {
    res.status(status).send({
        data: data ? data : null,
        message: data ? (
            message ? (message) : 'Thành công!'
        ) : (
            message ? message : 'Thất bại!'
        ),
        success: data ? true : false
    });
}
export {
    resClientData
};