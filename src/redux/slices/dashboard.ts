import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { dummyAlgoData, algosDeployedType } from "@/app/config/dummy-algo-data";

export interface dashboardState {
  marketSentiment: "Bullish" | "Bearish" | "Neutral";
  headIndices?: {
    name: string;
    value: number;
    change: number;
  }[];
  algosDeployed?: algosDeployedType[];
}

const initialState: dashboardState = {
  marketSentiment: "Bullish",
  headIndices: [
    { name: "Nifty", value: 17500.25, change: 150.75 },
    { name: "Bank Nifty", value: 41000.5, change: -200.4 },
    { name: "Midcap Nifty", value: 5800.1, change: 25.3 },
    { name: "Nifty500", value: 14500.75, change: -75.6 },
    { name: "India VIX", value: 18.25, change: 0.85 },
  ],
  algosDeployed: dummyAlgoData,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export const {} = dashboardSlice.actions;

export default dashboardSlice.reducer;
