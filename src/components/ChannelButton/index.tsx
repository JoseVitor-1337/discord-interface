import React from "react";

import {
  Container,
  Header,
  HashtagIcon,
  Span,
  Configuration,
  InviteIcon,
  SettingsIcon,
} from "./style";

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = (props) => {
  return (
    <Container className={props.selected ? "active" : ""}>
      <Header>
        <HashtagIcon />
        <Span>{props.channelName}</Span>
      </Header>

      <Configuration>
        <InviteIcon />
        <SettingsIcon />
      </Configuration>
    </Container>
  );
};

export default ChannelButton;
