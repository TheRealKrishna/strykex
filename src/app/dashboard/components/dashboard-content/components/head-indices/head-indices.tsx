import { useAppSelector } from "@/redux/hooks";
import Stock from "./stock";

export default function HeadIndices() {
  const headIndices = useAppSelector((state) => state.dashboard.headIndices);

  return (
    <div className="border border-[#474747] rounded-lg flex bg-[#101010] h-full flex-1 justify-around">
      {headIndices?.map((stock) => (
        <Stock key={stock.name} stock={stock} />
      ))}
    </div>
  );
}
