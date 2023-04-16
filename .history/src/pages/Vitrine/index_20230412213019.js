import Img from './Img/Amendoim.webp'
import Img2 from './Img/Casadogoiaba.webp'
import Img3 from './Img/Palmiergourmet.webp'
import Img4 from './Img/Sequilhocondesado.webp'
import Img5 from './Img/Fatiandodoce.webp'
import Img6 from './Img/Merengue.webp'
import Img7 from './Img/Nevada.webp'
import Img8 from './Img/Sequilhocondesado.webp'
import './../Vitrine/style.css'
import { useNavigate } from "react-router-dom";


function Body (){

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
          <div className="card red">
            <img className="image" src={Img5} alt="doce de goiabada" />
            <h2>goiabada</h2>
            <button className='button' data-id="1" onClick={() => iniciar(102)}>Detalhes</button>
          </div>
        </div>
      </>
    );
  }
  
  export default Body;