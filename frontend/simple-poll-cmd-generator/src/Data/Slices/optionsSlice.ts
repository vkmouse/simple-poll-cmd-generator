import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store/store";

interface OptionState {
  id: number
  name: string
}

interface OptionsState {
  value: OptionState[]
}

const initialState: OptionsState = {
  value: []
}

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    addOption: (state) => {
      const nextId = () => {
        if (state.value.length > 0) {
          return state.value[state.value.length - 1].id + 1;
        }
        return 0;
      }
      state.value.push({ 
        id: nextId(),
        name: ''
      });
    },
    deleteOption: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter(p => p.id !== action.payload)
    },
    changeOption: (state, action: PayloadAction<OptionState>) => {
      const index = state.value.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.value[index] = action.payload;
      }
      return state;
    }
  }
});

export const { addOption, deleteOption, changeOption } = optionsSlice.actions;
export const selectOptions = (state: RootState) => state.options.value;
export default optionsSlice.reducer;