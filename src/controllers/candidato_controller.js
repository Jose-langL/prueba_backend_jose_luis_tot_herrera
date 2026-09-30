import candidatoService from "../services/candidato_service.js";

class CandidatoController {

    async crear(req, res) {
        try {
            const candidato = req.body;

            const resultado = await candidatoService.crear(candidato);

            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({
                mensaje: "Error al crear el candidato",
                error: error.message
            });
        }
    }

    async listar(req, res) {
        try {
            const candidatos = await candidatoService.listar();

            res.status(200).json(candidatos);
        } catch (error) {
            res.status(500).json({
                mensaje: "Error al listar los candidatos",
                error: error.message
            });
        }
    }

    async actualizar(req, res) {
        try {
            const { id } = req.params;
            const candidato = req.body;

            const resultado = await candidatoService.actualizar(id, candidato);

            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({
                mensaje: "Error al actualizar el candidato",
                error: error.message
            });
        }
    }

    async eliminar(req, res) {
        try {
            const { id } = req.params;

            const resultado = await candidatoService.eliminar(id);

            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({
                mensaje: "Error al eliminar el candidato",
                error: error.message
            });
        }
    }
}

export default new CandidatoController();