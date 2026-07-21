import { Router } from "express";
import PlatControl from "../controllers/plat.controller.js";

const router = Router();

router.get("/", PlatControl.getAll);
router.get("/:id", PlatControl.getPlatById);
router.post("/", PlatControl.createPlat);
router.put("/:id", PlatControl.updatePlat);
router.delete("/:id", PlatControl.deletePlat);

export default router;