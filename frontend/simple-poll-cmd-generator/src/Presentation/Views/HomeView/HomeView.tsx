import styled from "@emotion/styled";
import { useState } from "react";
import { addOption, deleteOption, changeOption } from "../../../Data/Slices/optionsSlice";
import { useAppSelector, useAppDispatch } from "../../../Data/Store/hooks";
import GenerateCommandButton from "../../Components/GenerateCommandButton";
import Header from "../../Components/Header";
import VoteOption from "../../Components/VoteOption";
import VoteTitle from "../../Components/VoteTitle";

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
  const options = useAppSelector(state => state.options.value);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');

  return (
    <>
      <Header />
      <Main>
        <Container>
          <VoteTitle 
            title={title}
            onAddOptionClick={() => dispatch(addOption())}
            onTitleChange={setTitle}
          />
          <GenerateCommandButton />
          {options.map((p, index) => {
            return (
              <VoteOption
                key={p.id}
                value={p.name}
                placeholder={`選項 ${index + 1}`}
                onDeleteOptionClick={() => dispatch(deleteOption(p.id))}
                onOptionChange={s => dispatch(changeOption({ ...p, name: s }))}
              />
            );
          })}
        </Container>
      </Main>
    </>
  );
}

export default HomeView;