import { configureStore } from "@reduxjs/toolkit";
import { tabsSlice } from "./slices/tabs";
import { userSlice } from "./slices/user";
import { dashboardSlice } from "./slices/dashboard";

const store = configureStore({
  reducer: {
    tabs: tabsSlice.reducer,
    user: userSlice.reducer,
    dashboard: dashboardSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
