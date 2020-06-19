import React from "react";

import ChannelButton from "../ChannelButton";

import { Container, Category, AddCategoryIcon, Span } from "./style";

const ChannelList = () => {
  return (
    <Container>
      <Category>
        <Span>Canais de texto</Span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="valorant" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="cs:go" />
      <ChannelButton channelName="new word" />
    </Container>
  );
};

export default ChannelList;
