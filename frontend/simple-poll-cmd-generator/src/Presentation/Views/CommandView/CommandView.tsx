import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../../Data/Store/hooks";

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
  padding: '0.5em',
});

function CommandView() {
  const voteInfo = useAppSelector(state => state.voteInfo);
  const [command, setCommand] = useState('Please wait, command is generating...');

  useEffect(() => {
    fetch('/generate', {
      method: 'POST',
      body: JSON.stringify(voteInfo),
    })
    .then(response => response.json())
    .then(data => setCommand(data['command']));
  });

  return (
    <>
    <Container> 
      <Content>
        請先輸入 '/'，再貼上以下命令
      </Content>
    </Container>
    <br />
    <Container> 
      <Content>
        {command}
      </Content>
    </Container>
    </>
  );
}

export default CommandView;