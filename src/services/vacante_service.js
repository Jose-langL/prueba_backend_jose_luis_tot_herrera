import vacanteRepository from "../repositories/vacante_repository.js";

class VacanteService {

    async crear(vacante) {
        return await vacanteRepository.crear(vacante);
    }

    async listar() {
        return await vacanteRepository.listar();
    }

    async actualizar(id, vacante) {
        return await vacanteRepository.actualizar(id, vacante);
    }

    async eliminar(id) {
        return await vacanteRepository.eliminar(id);
    }
}

export default new VacanteService();