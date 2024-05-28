'use client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import PagCar from '../pages/PagCarrito';


export default function App(){
  function refreshPage(){
    window.parent.location=window.parent.location.href;
  }

  return (
    <Router>
      <section>
        <nav>
          <Link to="/" onClick={()=>refreshPage()}>Inicio</Link>
          <Link to="/carro"><img src='https://www.adeshoras.com/Content/Iconos/CarritoBlanco.png' className='carritoimg'></img></Link>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/carro" element={<PagCar />} />
        </Routes>
      </section>
    </Router>
  );
};


