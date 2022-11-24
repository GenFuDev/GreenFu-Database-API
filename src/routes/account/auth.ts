import express from "express";
import { auth as controller } from "../../controllers/account";
const router = express.Router();

router.post("/auth/login", controller.login);
router.post("/auth/register", controller.register);

export = router;
