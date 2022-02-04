import React, { useState } from "react";
import { Container, Header, TextConfirm } from "./styles";

import { FiX, FiClipboard } from "react-icons/fi";

interface Props {
  closeModel: any;
  content: any;
}

const LinkItem: React.FC<Props> = (props) => {
  const [copied, setCopied] = useState<boolean>(true);
  const [visi, setVisi] = useState<string>("none");

  // Esconde o aviso sobre a colagem
  function secret() {
    setVisi("none");
  }

  // Mostra o aviso e conta 5s para esconder novamente
  function timer() {
    if (visi === "none") {
      setVisi("inline");
    }
    setTimeout(secret, 5000);
  }

  // Copia o link e mostra o aviso
  async function copyLink() {
    await navigator.clipboard.writeText(props.content.link);
    setTimeout(timer, 500);
  }

  return (
    <Container>
      <Header>
        <h2>Link Encurtado</h2>
        <button onClick={props.closeModel}>
          <FiX color="#000" size={28} />
        </button>
      </Header>

      <span>{props.content.long_url}</span>

      <button onClick={copyLink}>
        {props.content.link}
        <FiClipboard size={20} color="#fff" />
      </button>
      {copied && (
        <TextConfirm visibily={visi}>Link copiado com sucesso!</TextConfirm>
      )}
    </Container>
  );
};

export default LinkItem;
