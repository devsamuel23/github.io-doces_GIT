import Img from './Img/Amendoim.webp'
import Img2 from './Img/Casadogoiaba.webp'
import Img3 from './Img/Palmiergourmet.webp'
import Img4 from './Img/Sequilhocondesado.webp'
import Img5 from './Img/Fatiandodoce.webp'
import React, { useEffect, useState } from "react";
import api from '../../services/api';
import './../Vitrine/style.css'
import { useNavigate } from "react-router-dom";


function Body (){

  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    api.get(`https://63069afec0d0f2b8011f9944.mockapi.io/produtos/`)
       .then((response) => {
         console.log(response);
         setProdutos(response.data.slice(78, 86))
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, [ ]);

  const navigate = useNavigate();

  function iniciar(productId) {
    navigate(`/produto/${productId}`);
  
     
    }

    function handleClick(event) {
      // Details button
      if (event.target.dataset.action === "details_btn") {
        const id = event.target.dataset.id;
        const produto = produtos.find((prod) => prod.id === id);
        console.log(produto);
        alert(produto.id);
      }
    }
    return(
      <>
        <div className="vit"> 
          <h1 className="vit">Vitrine de Produtos</h1>
        </div>
  
        <div className="container-vitrine">
          {produtos.map((produto) => (
          <div key={produto.id} className="item-vitrine">
            <img className="produto" src={produto.imagem} alt={produto.nome} />
          </div>
        ))}
        </div>
  
        <div className="row">
        {produtos.map((produto) => (
        <div key={produto.id} className="card red">
          <img className="image" src={produto.imagem} alt={produto.nome} />
          <h2>{produto.nome}</h2>
          <button className="button" data-id={produto.id} data-action="details_btn" onClick={handleClick}>
            Detalhes
          </button>
        </div>
        ))}
        </div>
      </>
    );
  }
  
  export default Body;