import { resClientData, verifyToken } from "../utils/index.js";

const middlewares = {
    verifyToken: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const verify = verifyToken(token);
            req.user = {
                ...verify,
                token
            };
            next();
        } catch (error) {
            resClientData(res, 403, error.message);
        }
    }
};
export default middlewares;