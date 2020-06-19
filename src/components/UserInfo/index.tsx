import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadsetIcon,
  SettingsIcon,
  Name,
  HashtagCode,
} from "./style";

const UserInfo = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <Name>Jose Vitor</Name>
          <HashtagCode>#1337</HashtagCode>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadsetIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
