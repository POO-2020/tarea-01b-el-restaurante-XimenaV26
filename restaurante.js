import Cliente from "./cliente.js"
import Direccion from "./direccion.js"
import ElementoPedido from "./elementoPedido.js"
import Fecha from "./fecha.js"
import Pedido from "./pedido.js"
import Precio from "./precio.js"
import Producto from "./producto.js"
import Tiempo from "./tiempo.js"
export default class Restaurante{

    /**
     * 
     * @param {string} nombre Nombre del Restaurante
     * @param {string} direccion Direccion del Restaurante
     * @param {number} telefono Numero de telefono del restaurante
     */

    constructor(nombre, direccion, telefono){

        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.productos = new Array();
        this.pedidos = new Array();

    }

    registrarProducto(producto){
        this.productos.push(producto.getDescripcion());

    }

    listarProductos(){
        this.productos.forEach((producto, i) => {console.log(`${i} - ${producto}`)});
    }

    registrarPedido(pedido){
        this.pedido.push(pedido);
    }

    listarPedido(){
        this.pedidos.forEach((pedido, i) => {console.log(`${i} - ${pedido.getResumen()}`)});
    }

}