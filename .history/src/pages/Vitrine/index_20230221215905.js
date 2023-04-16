import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Body() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Busca os dados da API usando o Axios
    axios.get("https://63069afec0d0f2b8011f9944.mockapi.io/produtos").then((response) => {
      setProdutos(response.data);
    });
  }, []);

  function handleDetalhes(id) {
    // Navega para a página de detalhes do produto com o ID correspondente
    navigate(`/produto/${id}`);
  }

  return (
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
      <container className="row">
        {produtos.map((produto) => (
          <div key={produto.id} className="card red">
            <img className="image" src={produto.imagem} alt={produto.nome} />
            <h2>{produto.nome}</h2>
            <button className="button" onClick={() => handleDetalhes(produto.id)}>
              Detalhes
            </button>
          </div>
        ))}
      </container>
    </>
  );
}

export default Body;
