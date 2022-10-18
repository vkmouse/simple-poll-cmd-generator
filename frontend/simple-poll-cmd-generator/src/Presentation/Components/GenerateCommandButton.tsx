import styled from '@emotion/styled';
import React from 'react';
import Button from '../Styles/Button';
import Row from '../Styles/Row';
import { Link } from "react-router-dom";

function GenerateCommandButton() {
  const Container = styled(Row)`
    justify-content: end
  `

  return (
    <Container>
      <Link to="/command">
        <Button>產生投票指令</Button>
      </Link>
    </Container>
  );
}

export default GenerateCommandButton;