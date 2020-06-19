import React from "react";

import {
  Container,
  Avatar,
  Message,
  Header,
  Body,
  Author,
  Span,
  Date,
} from "./style";

export { Mention } from "./style";

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}

const ChannelMessage: React.FC<Props> = (props) => {
  return (
    <Container className={props.hasMention ? "mention" : ""}>
      <Avatar className={props.isBot ? "bot" : ""} />

      <Message>
        <Header>
          <Author>{props.author}</Author>
          {props.isBot && <Span>Bot</Span>}
          <Date>{props.date}</Date>
        </Header>
        <Body>{props.content}</Body>
      </Message>
    </Container>
  );
};

export default ChannelMessage;
