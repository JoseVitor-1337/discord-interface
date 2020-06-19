import React from "react";

import { Container, Title, ExpendIcon } from "./style";

interface Props {}

const ServerName: React.FC<Props> = (props) => {
  return (
    <Container>
      <Title>Servidor do Discord</Title>

      <ExpendIcon />
    </Container>
  );
};

export default ServerName;
