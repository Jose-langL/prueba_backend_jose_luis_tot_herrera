import postulacionService from "../services/postulacion_service.js";

class PostulacionController {

    async crear(req, res) {
        try {
            const postulacion = req.body;

            const resultado = await postulacionService.crear(postulacion);

            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({
                mensaje: "Error al crear la postulación",
                error: error.message
            });
        }
    }

    async listar(req, res) {
        try {
            const postulaciones = await postulacionService.listar();

            res.status(200).json(postulaciones);
        } catch (error) {
            res.status(500).json({
                mensaje: "Error al listar las postulaciones",
                error: error.message
            });
        }
    }

    async actualizar(req, res) {
        try {
            const { id } = req.params;
            const postulacion = req.body;

            const resultado = await postulacionService.actualizar(
                id,
                postulacion
            );

            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({
                mensaje: "Error al actualizar la postulación",
                error: error.message
            });
        }
    }

    async eliminar(req, res) {
        try {
            const { id } = req.params;

            const resultado = await postulacionService.eliminar(id);

            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({
                mensaje: "Error al eliminar la postulación",
                error: error.message
            });
        }
    }
}

export default new PostulacionController();