import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div({
  alignItems: 'center',
  backgroundColor: '#202225',
  display: 'flex',
  justifyContent: 'center',
  height: '100px'
})

const Title = styled.div({
  fontSize: '40px',
  color: '#fff',
  '@media (max-width: 600px)': {
    fontSize: '28px',
  },
})

const Button = styled.button({
  backgroundColor: 'inherit',
  border: 0,
  borderRadius: '10px',
  color: '#fff',
  fontSize: '125%',
  height: '100%',
  paddingLeft: '0.5em',
  paddingRight: '0.5em',
  
  ":hover": {
    cursor: 'pointer'
  }
});

function Header() {
  return (
    <Container>
      <Link to="/">
        <Button>
          <Title>Simple Poll 指令產生器</Title>
        </Button>
      </Link>
    </Container>
  );
}

export default Header;