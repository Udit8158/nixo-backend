import { verifyToken } from "../../controller/auth/jwt";
import express from express;

const createProductRouter = express.Router;

createProductRouter.get('/', verifyToken, (req, res) => {
    console.log(req.data);
})

export default createProductRouter;