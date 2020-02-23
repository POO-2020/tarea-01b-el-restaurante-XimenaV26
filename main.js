import ElementoPedido from "./elementoPedido.js"
import Producto from "./producto.js"
import Precio from "./precio.js"
import Pedido from "./pedido.js"
import Fecha from "./fecha.js"
import Cliente from "./cliente.js"
import Direccion from "./direccion.js"
import Restaurante from "./restaurante.js"
import Tiempo from "./tiempo.js"

class Main{
    constructor(){
        this.pedido = new Pedido(new Fecha(26, 1, 2020), new Tiempo(4, 58, "PM"), new Cliente("Ximena", 3126745309, new Direccion("Juanito", 56, 67, "Esmeralda", 87654, "Colima", "col")));
        
        this.restaurant = new Restaurante("Ximenas", "Lomas Coll", 328839);
    }

    testElementoPedido(){
        let x = new ElementoPedido(new Producto("Pizza", new Precio(2500.5)), 2);
        console.log(x.getDescripcion());
    }

    testPedido(){
        console.log(this.pedido.getNumeroElementos());
        console.log(this.pedido.getCostoTotal());
        console.log(this.pedido.getProductos());
        console.log(this.pedido.getResumen());
    }

    agregarElemento(){
        let elem1 = new ElementoPedido(new Producto('Pizza de  champiñones', new Precio(45.5)), 2);
        let elem2 = new ElementoPedido(new Producto('Doritos negros', new Precio(12.5)), 4);
        this.pedido.agregarElementos(elem1);
        this.pedido.agregarElementos(elem2);
        this.pedido.listarElementos();
    }

    testRestaurante(){
        this.restaurant.registrarProducto(new Producto('Sopa do Makako', new Precio(200.500)));
        this.restaurant.registrarProducto(new Producto('Coca de piña', new Precio(25.500)));
        this.restaurant.listarProductos();

        let pedido1 = new Pedido(
            new Fecha(15, 12, 2019),
            new Tiempo(8, 15, 'PM'),
            new Cliente('Edson', new Direccion('Paseo de Azaleaz', 24, 'Jaime', 20, 'Colima', 'Noruega'), 3121135597));
      
          let elem1 = new ElementoPedido(new Producto('Pizza de  champiñones', new Precio(45.5)), 2);
          let elem2 = new ElementoPedido(new Producto('Doritos negros', new Precio(12.5)), 4);
          pedido1.agregarElementos(elem1);
          pedido1.agregarElementos(elem2);

          this.restaurant.registrarPedido(pedido1);
          this.restaurant.listarPedido();

    }

}

let app = new Main();
app.testRestaurante();
