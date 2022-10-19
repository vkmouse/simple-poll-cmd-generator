import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OptionState {
  id: number
  name: string
}

interface VoteInfoState {
  title: string
  options: OptionState[]
}

const initialState: VoteInfoState = {
  title: '',
  options: []
}

export const optionsSlice = createSlice({
  name: 'vote info',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    addOption: (state) => {
      const nextId = () => {
        if (state.options.length > 0) {
          return state.options[state.options.length - 1].id + 1;
        }
        return 0;
      }
      state.options.push({ 
        id: nextId(),
        name: ''
      });
    },
    deleteOption: (state, action: PayloadAction<number>) => {
      state.options = state.options.filter(p => p.id !== action.payload)
    },
    changeOption: (state, action: PayloadAction<OptionState>) => {
      const index = state.options.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.options[index] = action.payload;
      }
      return state;
    }
  }
});

export const { addOption, deleteOption, changeOption, setTitle } = optionsSlice.actions;
export default optionsSlice.reducer;