import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './../Vitrine/style.css';

function Body () {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://63069afec0d0f2b8011f9944.mockapi.io/produtos')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function goToProductPage(id) {
    navigate(`/produto/${id}`);
  }

  return(
    <> 
      <div className="vit">
        <h1 className="vit">Vitrine de Produtos</h1>
      </div>

      <div className="container-vitrine">
        {products.map(product => (
          <div className="item-vitrine" key={product.id}>
            <img className="produto" src={product.image} alt={product.name} />
          </div>
        ))}
      </div>

      <div className="container row">
        {products.map(product => (
          <div className="card red" key={product.id}>
            <img className="image" src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <button className="button" onClick={() => goToProductPage(product.id)}>Detalhes</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Body;