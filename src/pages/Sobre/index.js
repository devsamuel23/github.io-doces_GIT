import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import img from "./Img/html.jpg"
import Img2 from "./Img/css.jpg"
import Img3 from "./Img/javascript.jpg"
import Img4 from "./Img/React.png"

function Sobre() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Carousel.Caption>
          <h1>html</h1>
          <p>Que é uma linguagem de marcação utilizada na construção de páginas na Web</p>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>CSS</h1>
          <p>é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>JavaScript</h1>
          <p>
          JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS.
          </p>
        </Carousel.Caption>

        
      </Carousel.Item>

       <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img4}
          alt="Third slide"
        />

        <Carousel.Caption>
          
          <p>
          É uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
          </p>
        </Carousel.Caption>

        
      </Carousel.Item>
    </Carousel>
  );
}

export default Sobre