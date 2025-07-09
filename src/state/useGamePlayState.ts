import { useEffect, useState } from "react";
import { HOUSE_PICK_DELAY, RESULT_DELAY } from "../domain/constants";
import { getRandomShape, type Result, type Shape } from "../domain/shapes";

function useGameplayState() {
  const [hero, setHero] = useState<Shape | undefined>();
  const [house, setHouse] = useState<Shape | undefined>();
  const [result, setResult] = useState<Result | undefined>();
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (hero && !house) {
      setTimeout(() => {
        setHouse(getRandomShape());
      }, HOUSE_PICK_DELAY);
    }
  }, [hero]);

  useEffect(() => {
    setTimeout(() => {
      if (hero && house) {
        const r = hero.compare(house);
        setResult(r);
        setScore((s) => Math.max(s + r, 0));
      }
    }, RESULT_DELAY);
  }, [house]);

  function reset() {
    setHero(undefined);
    setHouse(undefined);
    setResult(undefined);
  }

  return {
    hero,
    setHero,
    house,
    reset,
    result,
    score,
  };
}

export default useGameplayState;
