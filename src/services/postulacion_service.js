import postulacionRepository from "../repositories/postulacion_repository.js";

class PostulacionService {

    async crear(postulacion) {
        return await postulacionRepository.crear(postulacion);
    }

    async listar() {
        return await postulacionRepository.listar();
    }

    async actualizar(id, postulacion) {
        return await postulacionRepository.actualizar(id, postulacion);
    }

    async eliminar(id) {
        return await postulacionRepository.eliminar(id);
    }
}

export default new PostulacionService();