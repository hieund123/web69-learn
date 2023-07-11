const validateMiddleWare = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validate({
                body: req.body,
                params: req.params,
                query: req.query
            });
            return next();
        }
        catch (error) {
            res.status(500).send({
                data: null,
                success: false,
                message: `Error:${error.name} - ${error.message}`
            })
        }
    }
};

export {
    validateMiddleWare
};