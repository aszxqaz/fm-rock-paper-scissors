import styled from "styled-components";
import TurnPanel from "./components/TurnPanel";
import ShapeSelected from "./components/ShapeSelected";
import useGamePlayState from "./state/useGamePlayState";
import { shapes } from "./domain/shapes";
import ScoreHeader from "./components/ScoreHeader";
import Button from "./components/Button";
import RulesDialog from "./components/RulesDialog";
import { useRef } from "react";

function App() {
  const { hero, reset, result, setHero, house, score } = useGamePlayState();
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openRules() {
    dialogRef.current?.showModal();
  }

  function closeRules() {
    dialogRef.current?.close();
  }

  return (
    <>
      <Layout>
        <ScoreHeader score={score} />
        {hero ? (
          <ShapeSelected
            hero={hero}
            house={house}
            onPlayAgain={reset}
            result={result}
          />
        ) : (
          <TurnPanel onShapeSelected={(idx) => setHero(shapes[idx])} />
        )}
        <Button onClick={openRules}>Rules</Button>
      </Layout>
      <RulesDialog ref={dialogRef} onClose={closeRules} />
    </>
  );
}

export default App;

const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-items: center;
  align-items: flex-start;
  padding-top: clamp(2rem, 1.5rem + 1.9vw, 3rem);
  padding-bottom: clamp(2rem, 4.2rem - 2.9vw, 3.5rem);

  @media (min-width: 1024px) {
    align-items: center;

    > ${Button} {
      justify-self: flex-end;
      margin-right: 2rem;
    }
  }
`;
