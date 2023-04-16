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



    const Navigate = useNavigate();

    async function iniciar() {
       Navigate("/");
    
     
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
            <button className='button' data-id="1" onClick={() => iniciar(1)}>Detalhes</button>
          </div>
  
          <div className="card red">
            <img className="image" src={Img6} alt="doce de um Merengue" />
            <h2>Merengue</h2>
            <button className='button' data-id="2" onClick={() => iniciar(2)}>Detalhes</button>
          </div>
  
          <div className="card red">
            <img className="image" src={Img7} alt="doce nevada" />
            <h2>Nevada</h2>
            <button className='button' data-id="3" onClick={() => iniciar(3)}>Detalhes</button>
          </div>
  
          <div className="card red">
            <img className="image" src={Img8} alt="Sequilho condesado" />
            <h2>Sequilhos</h2>
            <button className='button' data-id="4" onClick={() => iniciar(4)}>Detalhes</button>
          </div>
        </div>
      </>
    );
  }
  
  export default Body;