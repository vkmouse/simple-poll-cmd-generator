import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../Store/store';

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
    addOption: (state, action: PayloadAction<OptionState>) => {
      state.value.push(action.payload);
    },
    deleteOption: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter(p => p.id === action.payload)
    },
    changeOption: (state, action: PayloadAction<OptionState>) => {
      const index = state.value.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.value = [...state.value, action.payload]
      }
      return state;
    }
  }
});

export const { addOption, deleteOption, changeOption } = optionsSlice.actions;
export const selectOptions = (state: RootState) => state.options.value;
export default optionsSlice.reducer;