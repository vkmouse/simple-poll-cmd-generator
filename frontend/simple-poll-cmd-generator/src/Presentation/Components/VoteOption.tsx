import React from 'react';
import { IconButton } from '../Styles/Button';
import Row from '../Styles/Row';
import Vote from '../Styles/Vote';

interface Props {
  placeholder?: string
}

function Option(props: Props) {
  const { placeholder } = props;
  return (
    <Row>
      <Vote type='text' placeholder={placeholder} />
    </Row>
  );
}

export default Option;