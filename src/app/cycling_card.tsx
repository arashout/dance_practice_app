"use client";
import { useEffect, useState } from "react";
import {
  ResizablePanel,
} from "@/components/ui/resizable";
import { rainbow, randomChoice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

function CyclingCard({ messages, initialCycleTime }: { messages: string[], initialCycleTime: number }) {
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
    <Card className="flex w-screen justify-center flex-col">
      <CardHeader className="flex flex-row justify-center"  style={{ color: divBgColor }}>
        <CardTitle className="text-9xl text-center w-6/12">{messages[currentIndex]}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center" >
        <p>Time Until Next Prompt: <span className="font-bold">{cycleTime} seconds</span> </p>
        <Slider
          min={1}
          max={100}
          step={1}
          defaultValue={[cycleTime]}

          onValueChange={(value) => setCycleTime(value as any)}
        />
      </CardContent>
      <CardFooter className="flex flex-col justify-center items-center">
        <h1 className="text-4xl">Hip Hop Moves</h1>
      </CardFooter>
    </Card>
  );
}

export default CyclingCard;
