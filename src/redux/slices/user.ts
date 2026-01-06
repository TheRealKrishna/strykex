import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import {
  tabs,
  type tabType,
} from "@/app/dashboard/components/left-panel/components/tabs/config/tabs";

interface userState {
  name: string;
  username: string;
  email: string;
  avatarUrl: string;
  balance: number;
  tokenExpiry: string;
}

const initialState: userState = {
  name: "John Doe",
  username: "johndoe",
  email: "john.doe@example.com",
  avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  balance: 2000764.64,
  tokenExpiry: "2026-12-30",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;
export const user = (state: RootState) => state.user;

export default userSlice.reducer;
