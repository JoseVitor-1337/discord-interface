import styled from "styled-components";
import { Hashtag } from "styled-icons/heroicons-outline";
import { PersonAdd, Settings } from "styled-icons/material";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;
  margin-bottom: 5px;

  transition: all 0.5s;

  &:hover,
  &.active {
    background-color: var(--quinary);
  }

  &:hover header span {
    color: var(--white);
  }

  > div svg {
    display: none;
  }

  &:hover div svg {
    display: block;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const Span = styled.span`
  transition: all 0.5s;
  margin-left: 5px;
  color: var(--senary);
`;

export const Configuration = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  margin: 0 4px;
  z-index: 1;

  color: var(--symbol);
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;
  z-index: 1;

  color: var(--symbol);
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    color: var(--white);
  }
`;
