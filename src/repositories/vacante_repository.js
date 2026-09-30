import connection from "../config/db.js";

class VacanteRepository {

    async crear(vacante) {
        const [resultado] = await connection.execute(
            `INSERT INTO vacante
            (identificador, cargo, experiencia_minima, estado_vacante)
            VALUES (?, ?, ?, ?)`,
            [
                vacante.identificador,
                vacante.cargo,
                vacante.experiencia_minima,
                vacante.estado_vacante
            ]
        );

        return resultado;
    }

    async listar() {
        const [resultado] = await connection.execute(
            `SELECT * FROM vacante`
        );

        return resultado;
    }

    async actualizar(id, vacante) {
        const [resultado] = await connection.execute(
            `UPDATE vacante
             SET identificador = ?,
                 cargo = ?,
                 experiencia_minima = ?,
                 estado_vacante = ?
             WHERE id = ?`,
            [
                vacante.identificador,
                vacante.cargo,
                vacante.experiencia_minima,
                vacante.estado_vacante,
                id
            ]
        );

        return resultado;
    }

    async eliminar(id) {
        const [resultado] = await connection.execute(
            `DELETE FROM vacante
             WHERE id = ?`,
            [id]
        );

        return resultado;
    }
}

export default new VacanteRepository();