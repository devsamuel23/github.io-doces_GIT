import React, { useEffect, useState}  from 'react'
import { useParams } from 'react-router-dom';
import api from '../../services/api'
import { Link } from 'react-router-dom'


function Produto(){

const { id } = useParams();
console.log(id);
const [produtos, setprodutos] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(()=>{
    async function loadProdutos(){
        await api.get(`https://63069afec0d0f2b8011f9944.mockapi.io/produtos/${id}` , )
        .then((response)=>{
            setprodutos(response.data);
            setLoading(false);
        })
        .catch((response)=>{
            console.error(response.data)
        })
    }
    
    loadProdutos();

    return()=> {
        console.log("Componente desmontado");
    }
}, [ id])
if(loading)

{
    return(
        <div className="produto-container">
        <h1>Relação de Produtos</h1>
         <ul>
            {produtos.map(produtos => (
              <li key={produtos.Id}>
                 <b>Nome:</b>{produtos.nome}<br/>
                 <b>Descrição:</b>{produtos.descricao}<br/>
                 <img srcSet={produtos.imagem} alt={produtos.imagem}  />
                 <b>Preço:</b>{produtos.preco}<br/>
                 <Link to={`/Produto${"/"}`}>Acessar</Link>
             </li>
          ))}
         </ul>
     </div>
)
}}
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


