import { useAppSelector } from "@/redux/hooks";
import Algo from "./algo";

export default function AlgosMap() {
  const algosDeployed = useAppSelector(
    (state) => state.dashboard.algosDeployed
  );
  return (
    <div className="">
      {algosDeployed &&
        algosDeployed.map((algo, index) => (
          <Algo key={index} algosDeployed={algo} />
        ))}
    </div>
  );
}
