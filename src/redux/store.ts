import { configureStore } from "@reduxjs/toolkit";
import { tabsSlice } from "./slices/tabs";
import { userSlice } from "./slices/user";

const store = configureStore({
  reducer: {
    tabs: tabsSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
