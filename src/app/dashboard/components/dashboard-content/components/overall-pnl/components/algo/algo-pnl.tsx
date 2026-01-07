import { algosDeployedType } from "@/app/config/dummy-algo-data";
import { formatPnL } from "../../utils/format-pnl";

export default function AlgoPnL({
  algosDeployed,
}: {
  algosDeployed: algosDeployedType;
}) {
  return (
    <div className="flex-[20%] flex items-center justify-end whitespace-nowrap w-full">
      <p
        className={`text-md font-semibold tracking-wide ${
          algosDeployed.profitLoss >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {formatPnL(algosDeployed.profitLoss)}
      </p>
    </div>
  );
}
