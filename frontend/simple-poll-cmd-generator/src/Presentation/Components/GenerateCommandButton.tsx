import styled from '@emotion/styled';
import React from 'react';
import Button from '../Styles/Button';
import Row from '../Styles/Row';

function GenerateCommandButton() {
  const Container = styled(Row)`
    justify-content: end
  `
  
  return (
    <Container>
      <Button>產生投票指令</Button>
    </Container>
  );
}

export default GenerateCommandButton;