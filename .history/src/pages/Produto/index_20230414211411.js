import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Produto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduto() {
      try {
        const response = await fetch(
          `https://63069afec0d0f2b8011f9944.mockapi.io/produtos/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduto(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProduto();

    return () => {
      console.log("Componente desmontado");
    };
  }, [id]);

  if (loading || !produto) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container d-flex justify-content-around" >
      <img srcSet={produto.imagem} alt={produto.imagem} /> 
      <div className="flex-column">
      <h1> {produto.nome} </h1>
        <b>Preço:</b> {produto.preco} <br />
        <b>Descrição:</b> {produto.descricao} <br />
        <Link to="/Vitrine">Voltar para a lista de produtos</Link> <br />
      </div>
    </div>
  );
}

export default Produto;

/*
function Produto(){

const [produtos, setProdutos] = useState([]);
const { id } = useParams();
useEffect(() => {
  api.get(`https://63069afec0d0f2b8011f9944.mockapi.io/produtos/${id}`)
     .then((response) => {
       console.log(response.data.slice(78, 86));
       setProdutos(response.data.slice(78, 86))
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro : " + err);
    });
}, [ id]);

console.log(produtos);
// eslint-disable-next-line no-lone-blocks
{produtos.map((produtos) => {
    return(
    
        <div className="container">
          <div className="card" key={produtos.id}>
              <img srcSet={produtos.imagem} alt={produtos.imagem}  />
                  <h4><strong>{produtos.nome}</strong></h4>
                    <Link to={`/Produto${"/"}produtos.id`}>Acessar</Link>
              </div>
              </div>
      
    )
    })}}
export default Produto;*/
