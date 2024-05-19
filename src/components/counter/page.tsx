"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

type Props = {
  value: number;
};
export function Counter({ value }: Props) {
  const [counter, setCounter] = useState(value);

  const onClickSum = () => {
    setCounter(counter + 1);
  };

  const onClickRest = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <Card className="max-x-[200px] min-x-[200px] justify-center">
        <h1 className="text-9xl p-9">{counter}</h1>
      </Card>
      <div className="flex">
        <Button className="p-5 mr-5" onClick={onClickSum}>
          <span className="text-4xl">+1</span>
        </Button>
        <Button className="p-5" onClick={onClickRest}>
          <span className="text-4xl">-1</span>
        </Button>
      </div>
    </>
  );
}
