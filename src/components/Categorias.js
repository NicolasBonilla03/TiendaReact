import React, { useEffect, useState } from 'react';

export default function Categorias( ) {
    const [categorias, setCategorias] = useState([]);
    const [filtcategoria, setFiltCategoria] = useState('');
    const [productos, setProductos] = useState([]);
    const [carro, setCarro] = useState(JSON.parse(sessionStorage.getItem('carro')) || []);
  
    useEffect(() => {
      const fetchCategorias = () => {
        fetch('https://fakestoreapi.com/products/categories')
          .then(res => res.json())
          .then(data => {
            setCategorias(data);
          })
      };
      
  
      fetchCategorias();
    }, []);
  
    useEffect(() => {
      const fetchProdCat = () => {
  if (filtcategoria) {
    fetch(`https://fakestoreapi.com/products/category/${filtcategoria}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setProductos(data);
      });
  }
};
  
      fetchProdCat();
    }, [filtcategoria]);
  
    function Cat (c) {
      setFiltCategoria(c.target.value);
    };
  
    function carrito (producto)  {
      const prodCar = [...carro, producto];
      setCarro(prodCar);
      sessionStorage.setItem('carro', JSON.stringify(prodCar));
      alert('Producto Agregado Al Carrito')
    };

    const nomCategorias = {
      "electronics": "Electrónicos",
      "jewelery": "Joyería",
      "men's clothing": "Ropa para Hombres",
      "women's clothing": "Ropa para Mujeres",
    };

    return (
      <section>
        <select onChange={Cat} value={filtcategoria}>
          <option value="">Selecciona una categoria</option>
          {categorias.map(categoria => (
            <option key={categoria} value={categoria}>
              {nomCategorias[categoria]}
            </option>
          ))}
        </select>
        <ul>
          {productos.map(producto => (
            <li key={producto.id}>
              <h2 className='producto'>Producto: {producto.title}</h2>
              <h3>Precio: {producto.price}$</h3>
              <h3>Descripcion: {producto.description}</h3>
              <img src={producto.image} alt={producto.title} />
              <button onClick={() => carrito(producto)}>Añadir al carrito</button>
             
            </li>
          ))}
        </ul>
      </section>
    );
  };