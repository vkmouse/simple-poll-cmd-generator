import styled from '@emotion/styled';
import React from 'react';
import Row from '../Styles/Row';

function GenerateCommandButton() {
  const Container = styled(Row)`
    justify-content: end
  `
  
  return (
    <Container>
      <button>產生投票指令</button>
    </Container>
  );
}

export default GenerateCommandButton;