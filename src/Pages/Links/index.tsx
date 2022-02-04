import React, { useState, useEffect } from "react";

import { Container, Header, LinksItems, Trash, Button,LinkZero } from "./styles";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";

import { Link } from "react-router-dom";

import { getLinksSave, deleteLink } from "../../services/storeLinks";

import LinkItem from "../../components/LinkItem";

const Links: React.FC = () => {
  const [myLinks, setMyLinks] = useState<any[]>([]);
  const [data, setData] = useState<any>({});
  const [linkZero, setLinkZero] = useState<boolean>(false)

  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const getLinks = async () => {
      const result = await getLinksSave("@encurtaLink");

      if (result.length === 0) {
        setLinkZero(true);
      }

      setMyLinks(result);
    };

    getLinks();
  }, []);

  const handleOpenLink = (link: any) => {
    setData(link);
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    const result = await deleteLink(myLinks, id);

    if(result.length === 0){
      setLinkZero(true)
    }

    setMyLinks(result)
  };

  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </Header>

      {myLinks.map((link) => (
        <LinksItems key={link.id}>
          <Button onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color="#fff" />
            <label htmlFor="link">{link.long_url}</label>
          </Button>

          <Trash onClick={() => handleDelete(link.id)}>
            <FiTrash size={24} color="#ff5454" />
          </Trash>
        </LinksItems>
      ))}

      {showModal && (
        <LinkItem closeModel={() => setShowModal(false)} content={data} />
      )}
      {linkZero && (
        <LinkZero><h3>Volte para a página Home e adicione links...</h3></LinkZero>
      )}
    </Container>
  );
};

export default Links;
