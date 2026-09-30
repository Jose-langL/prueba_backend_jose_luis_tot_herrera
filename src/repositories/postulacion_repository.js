import connection from "../config/db.js";

class PostulacionRepository {

    async crear(postulacion) {
        const [resultado] = await connection.execute(
            `INSERT INTO postulacion
            (id_candidato, id_vacante, carta_presentacion, fuente_postulacion, puntuaje, estado)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                postulacion.id_candidato,
                postulacion.id_vacante,
                postulacion.carta_presentacion,
                postulacion.fuente_postulacion,
                postulacion.puntuaje,
                postulacion.estado
            ]
        );

        return resultado;
    }

    async listar() {
        const [resultado] = await connection.execute(
            `SELECT * FROM postulacion`
        );

        return resultado;
    }

    async actualizar(id, postulacion) {
        const [resultado] = await connection.execute(
            `UPDATE postulacion
             SET id_candidato = ?,
                 id_vacante = ?,
                 carta_presentacion = ?,
                 fuente_postulacion = ?,
                 puntaje = ?,
                 estado = ?
             WHERE id = ?`,
            [
                postulacion.id_candidato,
                postulacion.id_vacante,
                postulacion.carta_presentacion,
                postulacion.fuente_postulacion,
                postulacion.puntuaje,
                postulacion.estado,
                id
            ]
        );

        return resultado;
    }

    async eliminar(id) {
        const [resultado] = await connection.execute(
            `DELETE FROM postulacion
             WHERE id = ?`,
            [id]
        );

        return resultado;
    }
}

export default new PostulacionRepository();