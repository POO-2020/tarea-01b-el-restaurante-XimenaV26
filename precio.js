export default class Precio {

    /**
     * 
     * @param {number} valor Valor del producto
     */
    
    constructor(valor){
        this.valor = valor;
    }

    getPrecio(){
        return "$" + new Intl.NumberFormat("en-Us").format(this.valor); 
    }
}