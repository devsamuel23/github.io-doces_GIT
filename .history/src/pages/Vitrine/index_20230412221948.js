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
    return(
      <>
        <div className="vit"> 
          <h1 className="vit">Vitrine de Produtos</h1>
        </div>
  
        <div className="container-vitrine">
          <div className="item-vitrine">
            <img className="produto" src={Img} alt="goibinha de Amendoim" />
          </div>
          <div className="item-vitrine">
            <img className="produto" src={Img2} alt="goibinha de Amendoim" />
          </div>
          <div className="item-vitrine">
            <img className="produto" src={Img3} alt="goibinha de Amendoim" />
          </div>
          <div className="item-vitrine">
            <img className="produto" src={Img4} alt="goibinha de Amendoim" />
          </div>
        </div>
  
        <div className="row">
        {produtos.map((produto) => (
        <div key={produto.id} className="card red">
          <img className="image" src={produto.imagem} alt={produto.nome} />
          <h2>{produto.nome}</h2>
          <button className="button" data-id={produto.id} data-action="details_btn">
            Detalhes
          </button>
        </div>
        ))}
        </div>
      </>
    );
  }
  
  export default Body;