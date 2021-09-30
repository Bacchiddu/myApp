
import react from "react";
import "./ItemCount.css";

function ItemCount  ({ stock, initial })  {
  const [contador, setContador] = react.useState(parseInt(initial));

  function incrementar()  {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  function desIncrementar() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };


  return (
    
    
    
    <div className="organizado">
      <button className="btn" onClick={desIncrementar}> - </button>
      <p>Vas a llevar {contador} productos</p>
      <button className="btn" onClick={incrementar}> + </button>
    </div>
    
  );
};
export default ItemCount;
