import styled from "@emotion/styled";

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

function Header() {
  return (
    <Container>
      <Title>Simple Poll 指令產生器</Title>
    </Container>
  );
}

export default Header;