import Direccion from "./direccion"
export default class Cliente{

    /**
     * 
     * @param {string} nombre Nombre del cliente
     * @param {number} telefono Numero de telefono 
     * @param {string} direccion Direccion del cliente
     */
    
     constructor(nombre, telefono, direccion){
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }

    getPerfil(){
        return(`${this.nombre}, Numero: ${this.telefono}, Direccion: ${this.direccion}`)
    }
}

let cliente1 = new Cliente("Juanito", 312456789, new Direccion("Benito", 23, 6, "Col. Arboledas", 28976, "Colima", "Col"));
console.log(cliente1.getPerfil());