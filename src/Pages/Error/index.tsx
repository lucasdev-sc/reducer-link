import React from "react";

import { Container } from "./styles";

import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <Container>
      <img src="/notfound.png" alt="página não encontrada" />
      <h1>Página não encontrada!</h1>
      <Link to="/">
        Voltar para Home
      </Link>
    </Container>
  );
};

export default Error;
