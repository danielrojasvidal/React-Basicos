import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  //Crear listado del producto
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa React", precio: 50 },
    { id: 2, nombre: "Camisa Vue", precio: 20 },
    { id: 3, nombre: "Camisa Node", precio: 10 },
    { id: 4, nombre: "Camisa Angular", precio: 80 },
  ]);

  //State para carrito
  const [carrito, agregarProducto] = useState([]);

  //Obtener Fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual" />
      <h1>Lista de productos</h1>
      {productos.map((producto) => (
        <Producto 
          key={producto.id} 
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto} 
        />
      ))}
      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
