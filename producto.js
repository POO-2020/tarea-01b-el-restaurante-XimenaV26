import Precio from "./precio.js"
export default class Producto {
    /**
     * 
     * @param {string} nombre Nombre del producto
     * @param {Precio} precio Precio del producto
     */


    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio= precio;
    }

    getDescripcion(){
        return(`${this.nombre}  ${this.precio.getPrecio()}`);

    }
}