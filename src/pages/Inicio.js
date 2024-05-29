import Categoria from '../components/Categorias';


export default function Inicio ()  {
const categorias = [];
  return (
    <section>
      <h1 className="titulo titulo-producto">Fake Store</h1>
      <Categoria categorias={categorias}/>
    </section>
    );
  };
