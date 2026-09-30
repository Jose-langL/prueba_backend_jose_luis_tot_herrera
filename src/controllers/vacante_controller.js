import vacanteService from "../services/vacante_service.js";

class VacanteController {

    async crear(req, res) {
        try {
            const vacante = req.body;

            const resultado = await vacanteService.crear(vacante);

            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({
                mensaje: "Error al crear la vacante",
                error: error.message
            });
        }
    }

    async listar(req, res) {
        try {
            const vacantes = await vacanteService.listar();

            res.status(200).json(vacantes);
        } catch (error) {
            res.status(500).json({
                mensaje: "Error al listar las vacantes",
                error: error.message
            });
        }
    }

    async actualizar(req, res) {
        try {
            const { id } = req.params;
            const vacante = req.body;

            const resultado = await vacanteService.actualizar(id, vacante);

            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({
                mensaje: "Error al actualizar la vacante",
                error: error.message
            });
        }
    }

    async eliminar(req, res) {
        try {
            const { id } = req.params;

            const resultado = await vacanteService.eliminar(id);

            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({
                mensaje: "Error al eliminar la vacante",
                error: error.message
            });
        }
    }
}

export default new VacanteController();