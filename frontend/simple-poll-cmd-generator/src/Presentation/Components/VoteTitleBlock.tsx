import styled from '@emotion/styled';
import React from 'react';
import Button from '../Styles/Button';
import Row from '../Styles/Row';
import Vote from '../Styles/Vote';

function VoteTitleBlock() {
  const Container = styled(Row)`
    align-items: center
  `

  const VoteTitle = styled(Vote)`
    flex-grow: 1;
  `

  const CustomButton = styled(Button)`
    display: flex;
    align-items: center;
    margin-left: 1em;
  `

  return (
    <Container>
      <VoteTitle type='text' placeholder='投票主題' />
      <CustomButton><AddIcon /></CustomButton>
    </Container>
  );
}

function AddIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"></path>
    </svg>
  );
}

export default VoteTitleBlock;