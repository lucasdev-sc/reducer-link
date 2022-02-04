import React from "react";

import { Container, MenuItem } from "./styles";

import { BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <Container>
      <a href="https://youtube.com">
        <BsYoutube size={24} color="#fff" />
      </a>

      <a href="https://instagram.com">
        <BsInstagram size={24} color="#fff" />
      </a>

      <Link to='/links'>
        <MenuItem>
          Meus Link
        </MenuItem>
      </Link>
    </Container>
  );
};

export default Menu;
