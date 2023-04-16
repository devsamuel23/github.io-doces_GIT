import React, { useEffect, useState } from "react";
import api from '../../services/api';
import './styles.css';
import '.'


export default function Produtos() {
  
  
  
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
  return (
    <div className="produto-container">
       <h1>Relação de Produtos</h1>
        <ul>
           {produtos.map(produto => (
             <li key={produto.Id}>
                <b>Nome:</b>{produto.nome}<br/>
                <b>Descrição:</b>{produto.descricao}<br/>
                <b>Imagem:</b>{produto.imagem}<br/>
                <img srcSet={produto.imagem} />                
                <b>Preço:</b>{produto.preco}<br/>
            </li>
         ))}
        </ul>
    </div>
  );
}