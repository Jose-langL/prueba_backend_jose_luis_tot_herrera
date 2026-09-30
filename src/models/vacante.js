class Vacante  {
    #id;
    identificador;
    cargo;
    experiencia_minima;
    estado_vacante;

    constructor (id, identificador, cargo, experiencia_minima, estado_vacante){
        this.#id = id;
        this. identificador = identificador;
        this. cargo = cargo;
        this.experiencia_minima = experiencia_minima;
        this.estado_vacante = estado_vacante; 
    }

    get id(){
        return this.#id; 
    }
}

export default Vacante;