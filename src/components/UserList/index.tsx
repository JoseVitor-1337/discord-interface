import React from "react";

import { Container, Role, User, Span, Avatar, NickName } from "./style";

interface UserProps {
  nickName: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = (props) => {
  return (
    <User>
      <Avatar className={`${props.isBot ? "bot" : ""}`} />

      <NickName>{props.nickName}</NickName>

      {props.isBot && <Span>BOT</Span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickName="Jose Vitor" />

      <Role>Offline - 18</Role>
      <UserRow nickName="Matheus Vinicius" isBot={true} />
      <UserRow nickName="Marcos" />
      <UserRow nickName="Felipe" />
      <UserRow nickName="Rogério" />
      <UserRow nickName="Maria" />
      <UserRow nickName="Letícia" />
      <UserRow nickName="Maicon Rico" isBot={true} />
    </Container>
  );
};

export default UserList;
