"use client";
import { useState } from "react";
import { HIP_HOP_GROOVES } from "../lib/config";
import CyclingCard from "./cycling_card";
import AddCyclingCard from "./add_cycling_card";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [cards, setCards] = useState([
    { messages: HIP_HOP_GROOVES, initialCycleTime: 1 },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100">
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
crossOrigin="anonymous"
  />
      <div className="flex flex-col h-screen">
        {cards.map((card) => (
          <CyclingCard
            key={card.messages.join("")}
            messages={card.messages}
            initialCycleTime={card.initialCycleTime}
          />
        ))}
        <AddCyclingCard cards={cards} setCards={setCards} />
      </div>
    </main>
  );
}
