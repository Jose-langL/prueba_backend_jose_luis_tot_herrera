import express from "express";
import postulacionController from "../controllers/postulacion_controller.js";

const router = express.Router();

router.post("/", postulacionController.crear);
router.get("/", postulacionController.listar);
router.put("/:id", postulacionController.actualizar);
router.delete("/:id", postulacionController.eliminar);

export default router;