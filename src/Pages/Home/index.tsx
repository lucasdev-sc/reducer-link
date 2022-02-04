import React, { useState } from "react";
import { FiLink } from "react-icons/fi";

import { Container, Logo, AreaInput, LinkEncurt } from "./styles";

import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";

import api from "../../services/api";

import {saveLink} from '../../services/storeLinks'

const Home: React.FC = () => {
  const [link, setLink] = useState<string>("");
  const [showModel, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<object>({})

  async function handleShortLink() {
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)

      saveLink('@encurtaLink', response.data)

      setLink('')
      
    } catch (error) {
      alert("OPS, algo deu errado, te vira pra resolver")
      setLink('')
    }
  }

  return (
    <Container>
      <Logo>
        <img src="/logo.png" alt="Logo" />
        <h1>EncurtaLink</h1>
        <span>Cole seu link para encurtar 👍</span>
      </Logo>

      <AreaInput>
        <LinkEncurt>
          <FiLink size={24} color="#fff" />
          <input
            type="text"
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </LinkEncurt>

        <button onClick={handleShortLink}>Encurtar Link</button>
      </AreaInput>

      <Menu />
      {showModel && <LinkItem content={data} closeModel={() => setShowModal(false)} />}
    </Container>
  );
};

export default Home;
