import React from 'react';

 import { Container, List } from './styles';

function infoCrud({children,visible}) {
  return (
    <Container visible={visible}>
        <List>
          {children}
      
        </List>

      
    </Container>
  )
}

export default infoCrud;