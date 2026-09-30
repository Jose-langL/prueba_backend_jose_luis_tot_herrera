import express from "express";
import candidatoController from "../controllers/candidato_controller.js";

const router = express.Router();

router.post("/", candidatoController.crear);
router.get("/", candidatoController.listar);
router.put("/:id", candidatoController.actualizar);
router.delete("/:id", candidatoController.eliminar);

export default router;