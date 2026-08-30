import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {defaultDiscoveryValues, type DiscoveryFormValues} from "@/lib/schemas/discovery";

type DiscoveryState = {
  step: number;
  values: DiscoveryFormValues;
};

const initialState: DiscoveryState = {
  step: 0,
  values: defaultDiscoveryValues,
};

const discoverySlice = createSlice({
  name: "discovery",
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    updateValues(state, action: PayloadAction<Partial<DiscoveryFormValues>>) {
      state.values = {...state.values, ...action.payload};
    },
    resetDiscovery(state) {
      state.step = 0;
      state.values = defaultDiscoveryValues;
    },
  },
});

export const {setStep, updateValues, resetDiscovery} = discoverySlice.actions;
export const discoveryReducer = discoverySlice.reducer;
