import bullishIcon from "../assets/bullish.svg";

export const marketSentiment: marketSentimentType = {
  Bullish: {
    sentiment: "Bullish",
    icon: bullishIcon,
    color: "#3CFF49",
  },
  Bearish: {
    sentiment: "Bearish",
    icon: "/icons/bearish.svg",
    color: "#FF3C3C",
  },
  Neutral: {
    sentiment: "Neutral",
    icon: "/icons/neutral.svg",
    color: "#FFC93C",
  },
};

export type marketSentimentType = {
  [key: string]: {
    sentiment: "Bullish" | "Bearish" | "Neutral";
    icon: string;
    color: string;
  };
};
