import React, {useState} from 'react';

export default function Carrito () {
    const [prodCar, setProdCar] = useState(JSON.parse(sessionStorage.getItem('carro')) || []);

    function elimCarro (productId)  {
      const prodcar = prodCar.filter(producto => producto.id !== productId);
      setProdCar(prodcar);
      sessionStorage.setItem('carro', JSON.stringify(prodcar));
      alert('Producto Eliminado Del Carrito')
    };
  
    return (
      
      <section>
        <ul>
          {prodCar.map(producto => (
            <li key={producto.id}>
              <h1 className='prodcar'>Producto: {producto.title}</h1>
              <h1 className='precar'>Precio: {producto.price}$</h1>
              <button onClick={() => elimCarro(producto.id)}>Remover de carrito</button>
            </li>
          ))}
        </ul>
      </section>
    );
  };
