import express from "express";
import vacanteController from "../controllers/vacante_controller.js";

const router = express.Router();

router.post("/", vacanteController.crear);
router.get("/", vacanteController.listar);
router.put("/:id", vacanteController.actualizar);
router.delete("/:id", vacanteController.eliminar);

export default router;