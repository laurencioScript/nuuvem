import { Router } from "express";
import { HTTPException } from "../utils/errors";
import { HTTP } from "../utils/constants"

const router = Router();

router.use(function (req, res) {
    console.log('>>> req', req);
    throw new HTTPException("Not Found", HTTP.NotFound);
})

export default router;