import candidatoRepository from "../repositories/candidato_repository.js";

class CandidatoService {

    async crear(candidato) {
        return await candidatoRepository.crear(candidato);
    }

    async listar() {
        return await candidatoRepository.listar();
    }

    async actualizar(id, candidato) {
        return await candidatoRepository.actualizar(id, candidato);
    }

    async eliminar(id) {
        return await candidatoRepository.eliminar(id);
    }
}

export default new CandidatoService();