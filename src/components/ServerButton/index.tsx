import React from 'react'
import { Button } from './style'

export interface Props { 
   selected?: boolean,
   isHome?: boolean,
   hasNotifications?: boolean,
   mentions?: number
}

const ServerButton: React.FC<Props> = (props) => {

   console.log(props.mentions)
   return (
      <Button
         selected={props.selected}
         isHome={props.isHome}
         hasNotifications={props.hasNotifications}
         mentions={props.mentions}
      >
         {props.isHome ? "Home" : ""}
      </Button>
   )
}

export default ServerButton
