class ElementoPedido {

    /**
     * 
     * @param {string} producto Nombre del producto con su precio
     * @param {number} cantidad Cantidad del producto comprado
     */

    constructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }

    getDescripcion(){
        return(`${this.cantidad} x ${this.producto}`);
    }
}