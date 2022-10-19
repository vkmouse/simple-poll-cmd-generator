import styled from "@emotion/styled";

const Container = styled.div({
  backgroundColor: '#40444B',
  borderRadius: '10px',
  borderWidth: '0px',
  marginLeft: '0.5em',
  marginRight: '0.5em',
});

const Content = styled.span({
  color: '#D9DADB',
  display: 'inline-block',
  fontSize: '125%',
  padding: '0.5em',
});

function CommandView() {
  return (
    <Container> 
      <Content>
        Please wait, command is generating...
      </Content>
    </Container>
  );
}

export default CommandView;