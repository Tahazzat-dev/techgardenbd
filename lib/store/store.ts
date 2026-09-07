import {configureStore} from "@reduxjs/toolkit";
import {discoveryReducer} from "@/lib/store/discovery-slice";
import {settingsReducer} from "@/lib/store/settings/settingsSlice";

export const store = configureStore({
  reducer: {
    discovery: discoveryReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
