import styled from '@emotion/styled';
import React, { useState } from 'react';
import GenerateCommandButton from '../../Components/GenerateCommandButton';
import Header from '../../Components/Header';
import VoteOption, { VoteOptionProps } from '../../Components/VoteOption';
import VoteTitle from '../../Components/VoteTitle';

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

function HomeView() {
  const [title, setTitle] = useState('');
  const [optionProps, setOptionProps] = useState<VoteOptionProps[]>([]);

  const addOption = () => {
    setOptionProps([
      ...optionProps,
      { key: optionProps.length },
    ]);
  }

  return (
    <>
      <Header />
      <Main>
        <Container>
          <VoteTitle 
            title={title}
            onAddOptionClick={addOption}
            onTitleChange={setTitle}
          />
          <GenerateCommandButton />
          {optionProps.map(props => 
            <VoteOption {...props} />
          )}
        </Container>
      </Main>
    </>
  );
}

export default HomeView;