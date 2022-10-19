import { useState } from "react";
import { addOption, deleteOption, changeOption } from "../../../Data/Slices/optionsSlice";
import { useAppSelector, useAppDispatch } from "../../../Data/Store/hooks";
import GenerateCommandButton from "../../Components/GenerateCommandButton";
import VoteOption from "../../Components/VoteOption";
import VoteTitle from "../../Components/VoteTitle";

function HomeView() {
  const options = useAppSelector(state => state.options.value);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');

  return (
    <>
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
    </>
  );
}

export default HomeView;