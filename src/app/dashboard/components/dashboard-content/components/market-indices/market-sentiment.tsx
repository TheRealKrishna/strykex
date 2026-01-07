import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { marketSentiment } from "./config/market-sentiment";
import Image from "next/image";
import particlesImage from "./assets/particles.png";

export default function MarketSentiment() {
  const MarketSentiment = useAppSelector(
    (state) => state.dashboard.marketSentiment
  );

  return (
    <div
      className={` from-[#181818] px-2 w-full h-[-webkit-fill-available] flex items-center  rounded-lg relative justify-between max-w-50 flex-1`}
      style={{
        backgroundImage: `linear-gradient(to bottom, ${marketSentiment[MarketSentiment].color} 0%, #000000 100%)`,
      }}
    >
      <Image
        src={particlesImage}
        alt="particles-background"
        className="absolute top-0 left-0 z-10 w-full h-full object-cover rounded-lg mix-blend-multiply opacity-40"
      />
      <div className="flex items-start justify-center flex-col whitespace-nowrap">
        <p className="text-[#ffffff]">Market Sentiment</p>
        <p className="text-lg text-white z-20">{MarketSentiment}</p>
      </div>
      <div className="flex items-center justify-center flex-col absolute right-2 bottom-0 z-20">
        <Image
          src={marketSentiment[MarketSentiment].icon}
          alt="market-sentiment-icon"
          width={95}
          height={95}
        />
      </div>
    </div>
  );
}
