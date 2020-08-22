import React from "react";

const Producto = ({ producto, carrito, agregarProducto, productos }) => {
  const { nombre, precio, id } = producto;
  // Agrear producto al carrito
  const seleccionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    agregarProducto([...carrito, producto]);
  };
  // Elinar un producto del carrito
  const eliminarProducto = id => {
    const productos = carrito.filter(producto => producto.id !== id);
  // Agregar producto en el state
    agregarProducto(productos);
  };
  return (
    <div>
      <h1>{nombre}</h1>
      <p>${precio}</p>
      {productos ? (
        <button 
        type="button" 
        onClick={() => seleccionarProducto(id)}>
        Comprar
        </button>
      ) : (
        <button 
        type="button"
        onClick={() => eliminarProducto(id)}>
        Eliminar
        </button>
      )}
    </div>
  );
};

export default Producto;
