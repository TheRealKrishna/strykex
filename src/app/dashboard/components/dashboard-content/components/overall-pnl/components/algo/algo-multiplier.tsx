import { algosDeployedType } from "@/app/config/dummy-algo-data";

export default function AlgoMultiplier({
  algosDeployed,
}: {
  algosDeployed: algosDeployedType;
}) {
  return (
    <div className="flex-[10%] flex whitespace-nowrap w-full">
      <p className="text-md text-[white] font-semibold">2X</p>
    </div>
  );
}
