import type { Result, Shape } from "../domain/shapes";
import TurnShape from "./TurnShape";
import styled, { keyframes } from "styled-components";
import Button from "./Button";

type ShapeSelectedProps = {
  hero: Shape;
  house?: Shape;
  onPlayAgain?: () => void;
  result?: Result;
};

function mapResultToTitle(r: number) {
  return r == 1 ? "You win" : r == -1 ? "You lose" : "Draw";
}

function ShapeSelected({
  hero,
  house,
  onPlayAgain,
  result,
}: ShapeSelectedProps) {
  return (
    <Wrapper>
      <Col>
        <TurnShapeWrapper>
          <TurnShape shape={hero} splashed={result == 1} />
        </TurnShapeWrapper>
        <Title>You picked</Title>
      </Col>
      {typeof result == "number" ? (
        <ResultCol>
          <ResultTitle>{mapResultToTitle(result)}</ResultTitle>
          <Button onClick={onPlayAgain} $filled>
            Play again
          </Button>
        </ResultCol>
      ) : null}
      <Col>
        {house ? (
          <TurnShapeWrapper>
            <TurnShape shape={house} splashed={result == -1} entered />
          </TurnShapeWrapper>
        ) : (
          <TurnShapeWrapper>
            <TurnShapePlaceholder />
          </TurnShapeWrapper>
        )}
        <Title>The house picked</Title>
      </Col>
    </Wrapper>
  );
}

export default ShapeSelected;

const scaleFadeIn = keyframes`
    0% {
        opacity: 0;
        scale: 0;
    }
    100% {
        opacity: 1;
        scale: 1;
    }
`;

const ResultCol = styled.div`
  opacity: 0;
  scale: 0;
  grid-row-start: 2;
  grid-column: span 2;
  display: grid;
  gap: 1rem;
  place-items: center;
  margin-block: auto;
  width: max-content;
  justify-self: center;

  animation: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0s forwards ${scaleFadeIn};

  @media (min-width: 1024px) {
    grid-column: 2/3;
    grid-row-start: 1;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  row-gap: 3.5rem;
  column-gap: 3rem;

  &:has(${ResultCol}) {
    @media (min-width: 1024px) {
      grid-template-columns: 1fr min-content 1fr;
    }
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* grid-template-rows: 1fr auto; */
  gap: clamp(1rem, -0.05633802816901401rem + 4.507042253521126vw, 4rem);

  @media (min-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const Title = styled.p`
  font-size: clamp(1rem, 0.773rem + 0.97vw, 1.5rem);
  letter-spacing: 13%;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  user-select: none;
`;

const ResultTitle = styled.p`
  font-size: 3.5rem;
  font-weight: 700;
  text-transform: uppercase;
  user-select: none;
`;

const TurnShapeWrapper = styled.div`
  width: clamp(8.125rem, 4.54rem + 15.3vw, 18.3rem);
  height: 100%;
`;

const TurnShapePlaceholder = styled.div`
  margin: 7%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
`;
