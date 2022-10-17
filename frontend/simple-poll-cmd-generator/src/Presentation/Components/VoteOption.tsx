import styled from '@emotion/styled';
import React from 'react';
import Row from '../Styles/Row';
import Vote from '../Styles/Vote';

interface Props {
  placeholder?: string
}

function Option(props: Props) {
  const { placeholder } = props;
  const VoteItem = styled(Vote)`
    width: 100%;
  `

  return (
    <Row>
      <VoteItem type='text' placeholder={placeholder} />
    </Row>
  );
}

export default Option;