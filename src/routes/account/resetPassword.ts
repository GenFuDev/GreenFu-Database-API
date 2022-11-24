import express from "express";
import { resetPassword as controller } from "../../controllers/account";
const router = express.Router();

router.post("/resetPassword", controller.resetPassword);

export = router;
