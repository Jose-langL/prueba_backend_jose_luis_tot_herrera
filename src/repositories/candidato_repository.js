import connection from "../config/db.js";

class CandidatoRepository {

    async crear(candidato) {
        const [resultado] = await connection.execute(
            `INSERT INTO candidato
            (identificador, nombre, correo_electronico, experiencia)
            VALUES (?, ?, ?, ?)`,
            [
                candidato.identificador,
                candidato.nombre,
                candidato.correo_electronico,
                candidato.experiencia
            ]
        );

        return resultado;
    }

    async listar() {
        const [resultado] = await connection.execute(
            `SELECT * FROM candidato`
        );

        return resultado;
    }

    async actualizar(id, candidato) {
        const [resultado] = await connection.execute(
            `UPDATE candidato
             SET identificador = ?,
                 nombre = ?,
                 correo_electronico = ?,
                 experiencia = ?
             WHERE id = ?`,
            [
                candidato.identificador,
                candidato.nombre,
                candidato.correo_electronico,
                candidato.experiencia,
                id
            ]
        );

        return resultado;
    }

    async eliminar(id) {
        const [resultado] = await connection.execute(
            `DELETE FROM candidato
             WHERE id = ?`,
            [id]
        );

        return resultado;
    }
}

export default new CandidatoRepository();