import React from 'react';
import Row from '../Styles/Row';

interface Props {
  placeholder?: string
}

function Option(props: Props) {
  const { placeholder } = props;
  return (
    <Row>
      <input className='vote vote-item' type='text' placeholder={placeholder} />
    </Row>
  );
}

export default Option;