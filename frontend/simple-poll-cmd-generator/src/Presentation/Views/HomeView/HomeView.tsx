import React from 'react';
import GenerateCommandButton from '../../Components/GenerateCommandButton';
import Header from '../../Components/Header';
import VoteOption from '../../Components/VoteOption';
import VoteTitleBlock from '../../Components/VoteTitleBlock';

function HomeView() {
  return (
    <>
      <Header />
      <div className='main'>
        <div className='container'>
            <VoteTitleBlock />
            <GenerateCommandButton />
            <VoteOption placeholder='選項 1' />
            <VoteOption placeholder='選項 2' />
            <VoteOption placeholder='選項 3' />
            <VoteOption placeholder='選項 4' />
            <VoteOption placeholder='選項 5' />
        </div>
      </div>
    </>
  );
}

export default HomeView;