import styled from '@emotion/styled';
import React from 'react';
import GenerateCommandButton from '../../Components/GenerateCommandButton';
import Header from '../../Components/Header';
import VoteOption from '../../Components/VoteOption';
import VoteTitleBlock from '../../Components/VoteTitleBlock';

function HomeView() {
  const Main = styled.div({
    display: 'flex',
    justifyContent: 'center'
  });
  
  const Container = styled.div({
    backgroundColor: '#36393F',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    paddingTop: '1em',
    paddingBottom: '1em',
    rowGap: '1em',
    width: '800px'
  })

  return (
    <>
      <Header />
      <Main>
        <Container>
            <VoteTitleBlock />
            <GenerateCommandButton />
            <VoteOption placeholder='選項 1' />
            <VoteOption placeholder='選項 2' />
            <VoteOption placeholder='選項 3' />
            <VoteOption placeholder='選項 4' />
            <VoteOption placeholder='選項 5' />
        </Container>
      </Main>
    </>
  );
}

export default HomeView;