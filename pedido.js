import Fecha from "./fecha";
import Tiempo from "./tiempo";
import Cliente from "./cliente";
import ElementoPedido from "./elementoPedido";
export default class Pedido{
    /**
     * 
     * @param {Fecha} fecha Fecha de la orden
     * @param {Tiempo} hora Hora del pedido
     * @param {Cliente} cliente Datos del cliente
     * @param {ElementoPedido} elementoPedido Datos del pedido
     */
    
    constructor(fecha, hora, cliente, elementoPedido){
        this.fecha = fecha;
        this.hora = hora;
        this.cliente = cliente;
        this.elementoPedido = elementoPedido;
    }

    getResumen(){
        return(`${this.fecha.getFecha()} ${this.hora.getFormato12()}, ${this.elementoPedido.getElementoPedido()}`)
    }

    getNumeroElementos(){
        return(`${this.elementoPedido.get}`)
    }

    getProductos(){

    }

    getCostoTotal(){

    }

    agregarElemento(){

    }

    listarElementos(){

    }
}