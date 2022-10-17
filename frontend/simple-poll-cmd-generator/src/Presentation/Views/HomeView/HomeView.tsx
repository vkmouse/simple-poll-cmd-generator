import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
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

  const optionPropsRef = useRef(optionProps);

  const nextKey = () => {
    const { current } = optionPropsRef;
    if (current.length > 0) {
      return current[current.length - 1].key + 1;
    }
    return 0;
  }

  const addOption = () => {
    const key = nextKey();
    optionPropsRef.current = [...optionProps, {
      key,
      placeholder: `選項 ${key + 1}`,
      value: '',
      deleteOptionClick: () => deleteOption(key),
      optionChange: value => changeOption(key, value)
    }];
    setOptionProps(optionPropsRef.current);
  }

  const deleteOption = (key: number) => {
    optionPropsRef.current = optionPropsRef.current.filter(p => p.key !== key);
    setOptionProps(optionPropsRef.current);
  }

  const changeOption = (key: number, value: string) => {
    const index = optionPropsRef.current.findIndex(p => p.key === key);
    if (index !== -1) {
      const temp = [...optionPropsRef.current];
      temp[index].value = value;
      optionPropsRef.current = temp;
    }
    setOptionProps(optionPropsRef.current)
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