import express from "express";
import { business as controller } from "../../controllers/profile";
const router = express.Router();

router.get("/business", controller.getBusinessProfiles);
router.get("/business/:id", controller.getBusinessProfile);
router.put("/business/:id", controller.updateBusinessProfile);
router.delete("/business/:id", controller.deleteBusinessProfile);
router.post("/business", controller.addBusinessProfile);

export = router;
