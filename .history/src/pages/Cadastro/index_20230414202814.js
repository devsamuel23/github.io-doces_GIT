import axios from "axios";
import React from "react";
import { useState } from "react";
import"./style.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    const data = {
      nome,
      email,
      telefone,
    };

    axios
      .post("https://63069afec0d0f2b8011f9944.mockapi.io/cadastro", data)
      .then((response) => {
        console.log(response.data);

        alert("Você foi cadastrado!");
      });
    }
    
    return (
     
      <div className="container">
    <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="string" placeholder="Nome"  value={nome}
          onChange={(e) => setNome(e.target.value)} />
      </Form.Group>
      <br></br>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Telefone</Form.Label>
        <Form.Control type="string" placeholder="Telefone" value={telefone}
          onChange={(e) => setTelefone(e.target.value)} />
      </Form.Group>
      <br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="string" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <br></br>
      <br></br>
      
      <Button type="button"  className="btn btn-primary btn-lg btn-block">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Contato;

