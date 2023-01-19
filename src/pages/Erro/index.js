import { Link } from 'react-router-dom'
import "./style.css"

function Erro (){
    return(
        <div className="not-found">
            <h1>404</h1> <br />
            <h2>Pagina não encontrada!</h2>

            <br></br>
            <span>Encontramos essas páginas aqui:</span> <br />
            <Link to="/">Home</Link><br />
            <Link to="/Sobre">Sobre</Link><br />
            <Link to="/Contato">Contato</Link><br />
        </div>
        
    )
}
export default Erro;