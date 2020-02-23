import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Cliente from "./cliente.js";
import ElementoPedido from "./elementoPedido.js";
import Producto from "./producto.js";
import Direccion from "./direccion.js";
import Precio from "./precio.js";

export default class Pedido{
    /**
     * 
     * @param {Fecha} fecha Fecha de la orden
     * @param {Tiempo} hora Hora del pedido
     * @param {Cliente} cliente Datos del cliente
     */
    
    constructor(fecha, hora, cliente){
        this.fecha = fecha;
        this.hora = hora;
        this.cliente = cliente;
        this.elementoPedido = new Array();
    } 

    agregarElementos(elemento){
        this.elementoPedido.push(elemento);
    }

    listarElementos(){
        this.elementoPedido.forEach((elemento, i) => {console.log(`${i} - ${elemento.getDescripcion()}`)
          });
    }

    getResumen(){
        return(`${this.fecha.getFecha()} ${this.hora.getFormato12() } - ${this.getNumeroElementos()}  ${this.getProductos()} - total: ${this.getCostoTotal()}`);
    }

    getNumeroElementos(){
        return(`${this.elementoPedido.length}`);
    }

    getProductos(){
        let x = 0; 
        this.elementoPedido.forEach(elemento => { x = elemento.cantidad + x}); 
        return(x);
    }

    getCostoTotal(){
        let total = 0;
        this.elementoPedido.forEach(elemento => { total = (elemento.cantidad * elemento.producto.precio.valor) + total});
        return new Precio(total).getPrecio();
    }

}