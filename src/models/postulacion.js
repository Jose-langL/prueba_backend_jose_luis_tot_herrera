class Postulacion {
    #id;
    id_candidato;
    id_vacante;
    carta_presentacion;
    fuente_postulacion;
    puntuaje;
    estado; 
    fecha_de_creacion;
    fecha_ultima_actualizacion;

    constructor (id, id_candidato, id_vacante, carta_presentacion, fuente_postulacion, puntuaje, estado, fecha_de_creacion, fecha_ultima_actualizacion){
        this.#id = id;
        this.id_vacante = id_vacante;
        this.id_candidato = id_candidato;
        this.carta_presentacion = carta_presentacion;
        this.fuente_postulacion = fuente_postulacion;
        this.puntuaje = puntuaje;
        this.estado = estado;
        this.fecha_de_creacion = fecha_de_creacion;
        this.fecha_ultima_actualizacion = fecha_ultima_actualizacion;

    }

    get id(){
        return this.#id; 
    }
}

export default Postulacion;