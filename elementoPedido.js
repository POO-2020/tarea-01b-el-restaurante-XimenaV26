import Producto from "./producto.js";
import Precio from "./precio.js";
export default class ElementoPedido {

    /**
     * 
     * @param {Producto} producto Nombre del producto con su precio
     * @param {number} cantidad Cantidad del producto comprado
     */

    constructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }

    getDescripcion(){
        let suma = this.cantidad * this.producto.precio.valor;
        return(`${this.cantidad} x ${this.producto.nombre} = ${suma}`);
    }


}
