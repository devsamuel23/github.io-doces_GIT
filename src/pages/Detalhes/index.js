import { useEffect, useState} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import "./style.css"

function Detalhes(){
  const { id } = useParams();
  const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(()=>{

     
     api.get("https://63069afec0d0f2b8011f9944.mockapi.io/produtos")
      .then((response) => {
        console.log(response.data.slice())
 
     
       
       setProdutos(response.data.slice(78, 86));
       setLoading(false);
   
      })}, [id])

if(loading){
    return(
    <div className='loading'>
        <h2>Carregando Doces...</h2>
    </div>
    )
}

  return(
    <div className="containe">
      
        {produtos.map((produtos) => {
          return(
          
              <div className="container">
                <div className="card" key={produtos.id}>
                    <img srcSet={produtos.imagem} alt={produtos.imagem}  />
                        <h4><strong>{produtos.nome}</strong></h4>
                        <h4><strong>{produtos.descricao}</strong></h4>
                        <h4><strong>{produtos.preco}</strong></h4>
                          <Link to={`/Produto${"/"}produtos.id`}>Acessar</Link>
                    </div>
                    </div>
            
          )
        })}
    
    </div>
  )
}

export default Detalhes;