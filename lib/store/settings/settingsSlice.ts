import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

import {createDefaultSettingsState, loadPersistedSettings} from "@/lib/store/settings/settingsStorage";
import type {SettingsState} from "@/lib/store/settings/settingsTypes";

const initialState: SettingsState = loadPersistedSettings() ?? createDefaultSettingsState();

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<SettingsState["theme"]>) {
      state.theme = action.payload;
    },
    setCurrency(state, action: PayloadAction<SettingsState["currency"]>) {
      state.currency = action.payload;
    },
    setDateFormat(state, action: PayloadAction<SettingsState["dateFormat"]>) {
      state.dateFormat = action.payload;
    },
    setTimeFormat(state, action: PayloadAction<SettingsState["timeFormat"]>) {
      state.timeFormat = action.payload;
    },
    setNumberFormat(state, action: PayloadAction<SettingsState["numberFormat"]>) {
      state.numberFormat = action.payload;
    },
    hydrateSettings(_, action: PayloadAction<SettingsState>) {
      return action.payload;
    },
  },
});

export const {setTheme, setCurrency, setDateFormat, setTimeFormat, setNumberFormat, hydrateSettings} =
  settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
