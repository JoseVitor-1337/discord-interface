import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./style";

import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(25).keys()).map((id) => (
          <ChannelMessage
            author="José Vitor"
            date="14/05/2020"
            content="Ta tudo dando certo :D"
          />
        ))}

        <ChannelMessage
          author="Marcos Vinicius"
          date="15/05/2020"
          hasMention={true}
          isBot={true}
          content={
            <>
              <Mention>@José Vitor</Mention> Oh Hello There
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
