import React from 'react';
import { IconButton } from '../Styles/Button';
import Row from '../Styles/Row';
import Vote from '../Styles/Vote';

function VoteTitleBlock() {
  return (
    <Row>
      <Vote type='text' placeholder='投票主題' />
      <IconButton><AddIcon /></IconButton>
    </Row>
  );
}

function AddIcon() {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"></path>
    </svg>
  );
}

export default VoteTitleBlock;