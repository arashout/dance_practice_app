import { HIP_HOP_GROOVES, HIP_HOP_MOVES } from "../lib/config";
import CyclingCard from "./cycling_card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100">
    <div className="flex flex-col h-screen">
      <CyclingCard messages={HIP_HOP_GROOVES} initialCycleTime={1} />
    </div>
    </main>
  );
}
