import Precio from "./precio"
class Producto {
    /**
     * 
     * @param {string} nombre Nombre del producto
     * @param {number} precio Precio del producto
     */


    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio= precio;
    }

    getDescripcion(){
        return(`${this.producto} $ ${this.precio}`);

    }
}