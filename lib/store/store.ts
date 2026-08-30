import {configureStore} from "@reduxjs/toolkit";
import {discoveryReducer} from "@/lib/store/discovery-slice";

export const store = configureStore({
  reducer: {
    discovery: discoveryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
