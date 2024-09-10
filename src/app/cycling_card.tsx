"use client";
import { useEffect, useState } from "react";
import { rainbow, randomChoice } from "@/lib/utils";

import Card from 'react-bootstrap/Card';
import { Slider } from "@/components/ui/slider";

function CyclingCard(
  { messages, initialCycleTime }:
  { messages: string[], initialCycleTime: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cycleTime, setCycleTime] = useState(initialCycleTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((_) => randomChoice(messages));
    }, cycleTime * 1000);

    return () => clearInterval(interval);
  }, [messages, cycleTime]);

  const divBgColor = rainbow(messages.length, currentIndex);

  return (
    <div className="p-12">
      <Card className="flex w-screen justify-center flex-col">
      <Card.Header className="flex flex-row justify-center" >
        <Card.Title className="text-center w-screen">
          <h1 className="text-9xl" style={{ backgroundColor: divBgColor }}>{messages[currentIndex]}</h1>
        </Card.Title>
      </Card.Header>
      <Card.Body className="flex flex-col justify-center items-center" >
        <p>Time Until Next Prompt: <span className="font-bold">{cycleTime} seconds</span> </p>
        <Slider
          min={1}
          max={100}
          step={1}
          defaultValue={[cycleTime]}

          onValueChange={(value) => setCycleTime(value as any)}
        />
      </Card.Body>
      </Card>
    </div>
  );
}

export default CyclingCard;
