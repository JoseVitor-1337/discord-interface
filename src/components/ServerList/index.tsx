import React from 'react'
import ServerButton from '../ServerButton'
import { Separetor, Container } from './style'

const ServerList: React.FC = () => {
   return (
     <Container>
      <ServerButton isHome={true} />
      
      <Separetor />

      <ServerButton />
      <ServerButton hasNotifications={true} />
      <ServerButton mentions={3}/>
      <ServerButton hasNotifications={true}/>
      <ServerButton />
      <ServerButton hasNotifications={true}/>
      <ServerButton />
      <ServerButton mentions={72}/>
      <ServerButton />
      <ServerButton hasNotifications={true} />
      <ServerButton mentions={7}/>
      <ServerButton hasNotifications={true}/>
      <ServerButton />
      <ServerButton hasNotifications={true}/>
      <ServerButton />
      <ServerButton mentions={19}/>
     </Container>
   )
}

export default ServerList
