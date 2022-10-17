import React from 'react';
import { IconButton } from '../Styles/Button';
import Row from '../Styles/Row';
import Vote from '../Styles/Vote';

interface Props {
  placeholder?: string
}

function VoteOption(props: Props) {
  const { placeholder } = props;
  return (
    <Row>
      <Vote type='text' placeholder={placeholder} />
      <IconButton><DeleteOptionIcon /></IconButton>
    </Row>
  );
}

function DeleteOptionIcon() {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <path transform="rotate(45 12 12.001)" id="svg_1" d="m12,2.00098c-5.514,0 -10,4.486 -10,10.00002c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-5.51402 -4.486,-10.00002 -10,-10.00002zm5,11.00002l-4,0l0,4l-2,0l0,-4l-4,0l0,-2l4,0l0,-4.00002l2,0l0,4.00002l4,0l0,2z" fill="#FF6060"/>
    </svg>
  );
}

export default VoteOption;