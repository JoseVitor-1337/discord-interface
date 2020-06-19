import styled from "styled-components";

import { Props } from './index'

export const Button = styled.button<Props> `
   display: flex;
   align-items: center;
   justify-content: center;
   transition: all 0.3s ease;

   font-size: .8em;
   color: var(--white);

   border-radius: 50%;
   flex-shrink: 0; /* O elemento não vai ter seu tamanho modificado */

   width: 48px;
   height: 48px;

   margin-bottom: 10px;

   background-color: ${props => props.isHome ? "var(--rocketseat)" : "var(--primary)"};

   cursor: pointer;
   position: relative;

   &.active, &:hover {
      border-radius: 16px;
      background-color: ${props => props.isHome ? "var(--rocketseat)" : "var(--discord)"};
   }

   &::before {
      width: 9px;
      height: 9px;

      position: absolute;
      left: -17px;
      top: calc(50% - 4.5px);

      background-color: var(--white);
      border-radius: 50%;

      content: "";
      display: ${props => props.hasNotifications ? "inline" : "none"};
   }

   &::after {
      background-color: var(--notification);
      width: auto;
      height: 16px;
      padding: 0 4px;
      
      position: absolute;
      bottom: -4px;
      right: -4px;

      border-radius: 12px;
      border: 4px solid var(--quartenary);

      text-align: right;
      font-size: 13px;
      font-weight: 700;
      color: var(--white);
      
      content: '${props => props.mentions && props.mentions}';
      display: ${props => props.mentions && props.mentions !== undefined ? "block" : "none"};
   }
`