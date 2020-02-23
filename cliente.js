import Direccion from "./direccion.js"
export default class Cliente{

    /**
     * 
     * @param {string} nombre Nombre del cliente
     * @param {number} telefono Numero de telefono 
     * @param {Direccion} direccion Direccion del cliente
     */
    
     constructor(nombre, telefono, direccion){
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }

    getPerfil(){
        return(`${this.nombre}, Numero: ${this.telefono}, Direccion: ${this.direccion.getFormatoCorto()}`);
    }
}

