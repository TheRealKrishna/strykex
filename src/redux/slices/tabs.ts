import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type tabType } from "@/app/dashboard/components/left-panel/components/tabs/config/tabs";

interface TabsState {
  currentTab: keyof tabType;
}

const initialState: TabsState = {
  currentTab: "dashboard",
};

export const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<keyof tabType>) => {
      state.currentTab = action.payload;
    },
  },
});

export const { setTab } = tabsSlice.actions;

export default tabsSlice.reducer;
