class Candidato  {
    #id;
    identificador;
    nombre;
    correo_electronico;
    experiencia;

    constructor (id, identificador, nombre, correo_electronico, experiencia){
        this.#id = id;
        this. identificador = identificador;
        this. nombre = nombre;
        this. correo_electronico = correo_electronico;
        this.experiencia = experiencia;
    }

    get ID(){
        return this.#id 
    }
}


export default Candidato;