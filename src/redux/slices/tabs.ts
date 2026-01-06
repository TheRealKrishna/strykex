import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import {
  tabs,
  type tabType,
} from "@/app/dashboard/components/left-panel/components/tabs/config/tabs";

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
export const selectTab = (state: RootState) => state.tabs.currentTab;

export default tabsSlice.reducer;
