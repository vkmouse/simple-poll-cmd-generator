import styled from '@emotion/styled'
import React from 'react';

function Header() {
  const Container = styled.div({
    alignItems: 'center',
    backgroundColor: '#202225',
    display: 'flex',
    justifyContent: 'center',
    height: '100px'
  })

  const Title = styled.div({
    fontSize: '40px',
    color: '#fff'
  })

  return (
    <Container>
      <Title>Simple Poll 指令產生器</Title>
    </Container>
  );
}

export default Header;