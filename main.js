import ElementoPedido from "./elementoPedido.js"
import Producto from "./producto.js"
import Precio from "./precio.js"
import Pedido from "./pedido.js"
import Fecha from "./fecha.js"
import Cliente from "./cliente.js"
import Direccion from "./direccion.js"
import Restaurante from "./restaurante.js"
import Tiempo from "./tiempo.js"

class Main {
    constructor() {
      this.pedido = new Pedido(
        new Fecha(22, 2020, 2),
        new Tiempo(5, 23, 'PM'),
        new Cliente('Ximena',
          new Direccion("Lomas Verdes", 800, 5, "Del Rey", 28974, "Colima", "Col"),
          3122097842));
  
      this.restau = new Restaurante('La Pizza de Don Cangrejo', '85', 'Linda Vista');
    }
  
  
    testElementoPedido() {
      let x = new ElementoPedido(new Producto("Pizza", new Precio(2500.5)), 2);
      console.log(x.getDescripcion());
    }
  
    testPedido() {
      console.log(this.pedido.getNumeroElementos());
      console.log(this.pedido.getCostoTotal());
      console.log(this.pedido.getProductos());
      console.log(this.pedido.getResumen());
    }
  
    agregarElemento() {
      let elem1 = new ElementoPedido(new Producto('Pizza de  hawaina', new Precio(50)), 2);
      let elem2 = new ElementoPedido(new Producto('Brownie especial', new Precio(20.50)), 6);
      this.pedido.agregarElementos(elem1);
      this.pedido.agregarElementos(elem2);
      this.pedido.listarElementos();
    }
  
    testRestaurante() {
      this.restau.registrarProducto(new Producto('Pizza de pastor', new Precio(250.500)));
      this.restau.registrarProducto(new Producto('Coca-Cola', new Precio(25)));
      this.restau.listarProductos();
  
  
      let pedido1 = new Pedido(
        new Fecha(15, 12, 2019),
        new Tiempo(8, 15, 'PM'),
        new Cliente('Edson', new Direccion('Arboledas del Carmen', 810, 'Ximena', 19, 'Colima', 'Villa de Alvarez'), 31245632089));
  
      let elem1 = new ElementoPedido(new Producto('Pizza de Cochinita Pibil', new Precio(75.50)), 3);
      let elem2 = new ElementoPedido(new Producto('Piña', new Precio(15.50)), 4);
      pedido1.agregarElementos(elem1);
      pedido1.agregarElementos(elem2);
  
      let pedido2 = new Pedido(
        new Fecha(14, 2, 2020),
        new Tiempo(10, 15, 'AM'),
        new Cliente('Alan', new Direccion('La Paz', 41, 'Carlos', 22, 'Colima', 'Árboledas del Carmen'), 3126754323));
  
      let elem4 = new ElementoPedido(new Producto('Pizza Especial', new Precio(300.50)), 5);
      let elem3 = new ElementoPedido(new Producto('Fanta', new Precio(15)), 2);
      pedido2.agregarElementos(elem3);
      pedido2.agregarElementos(elem4);
  
      this.restau.registrarPedido(pedido1);
      this.restau.registrarPedido(pedido2);
  
      this.restau.listarPedido();
  
    }
  }
  
  let app = new Main();
  
  app.testRestaurante();
