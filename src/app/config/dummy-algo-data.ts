import {
  FaBolt,
  FaChartLine,
  FaExchangeAlt,
  FaRocket,
  FaWaveSquare,
  FaFireAlt,
  FaBalanceScale,
} from "react-icons/fa";

export const dummyAlgoData = [
  {
    id: "1",
    name: "Momentum Trader",
    status: "Live",
    profitLoss: 1200.5,
    deploymentDate: "2024-05-01",
    department: "Live",
    icon: FaBolt,
  },
  {
    id: "2",
    name: "Mean Reversion",
    status: "Waiting for next Signal",
    profitLoss: -350.75,
    deploymentDate: "2024-04-15",
    department: "Virtual",
    icon: FaChartLine,
  },
  {
    id: "3",
    name: "Arbitrage Bot",
    status: "Stopped",
    profitLoss: 0,
    deploymentDate: "2024-03-20",
    department: "Live",
    icon: FaExchangeAlt,
  },
  {
    id: "4",
    name: "Scalping Alpha",
    status: "Live",
    profitLoss: 780.2,
    deploymentDate: "2024-06-10",
    department: "Virtual",
    icon: FaRocket,
  },
  {
    id: "5",
    name: "Swing Trader",
    status: "Waiting for next Signal",
    profitLoss: 320.0,
    deploymentDate: "2024-05-22",
    department: "Live",
    icon: FaWaveSquare,
  },
  {
    id: "6",
    name: "Volatility Breakout",
    status: "Stopped",
    profitLoss: -150.3,
    deploymentDate: "2024-04-30",
    department: "Virtual",
    icon: FaFireAlt,
  },
  {
    id: "7",
    name: "Pairs Trading",
    status: "Live",
    profitLoss: 950.75,
    deploymentDate: "2024-06-01",
    department: "Live",
    icon: FaBalanceScale,
  },
  {
    id: "8",
    name: "Trend Follower",
    status: "Waiting for next Signal",
    profitLoss: 210.4,
    deploymentDate: "2024-05-18",
    department: "Virtual",
    icon: FaChartLine,
  },
] as algosDeployedType[];

export type algosDeployedType = {
  id: string;
  name: string;
  status: "Live" | "Waiting for next Signal" | "Stopped";
  profitLoss: number;
  deploymentDate: string;
  department: "Live" | "Virtual";
  icon: React.ComponentType<{
    className?: string;
  }>;
};
