import styled from "styled-components";
import TurnShape from "./TurnShape";
import { shapes } from "../domain/shapes";

type TurnPanelProps = {
  onShapeSelected: (index: number) => void;
};

function TurnPanel({ onShapeSelected }: TurnPanelProps) {
  return (
    <Wrapper>
      <TriangleLineOne />
      <TriangleLineTwo />
      <TriangleLineThree />
      <Row>
        <TurnShape shape={shapes[0]} onClick={() => onShapeSelected(0)} />
        <TurnShape shape={shapes[1]} onClick={() => onShapeSelected(1)} />
      </Row>
      <Row className="shifted">
        <TurnShape shape={shapes[2]} onClick={() => onShapeSelected(2)} />
        <div></div>
      </Row>
    </Wrapper>
  );
}

export default TurnPanel;

const Wrapper = styled.div`
  width: 100%;
  max-width: 35rem;
  position: relative;
  display: grid;
  gap: 6%;
  padding-inline: 2rem;
`;

const Row = styled.div`
  display: flex;
  gap: 16.5%;

  > * {
    flex: 1;
  }

  &.shifted {
    > * {
      transform: translateX(70%);
    }
  }
`;

const TriangleLine = styled.div`
  position: absolute;
  height: 15px;
  top: 25%;
  left: 50%;
  width: 60%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const TriangleLineOne = styled(TriangleLine)`
  transform: translateX(-50%);
`;

const TriangleLineTwo = styled(TriangleLine)`
  transform-origin: center right;
  transform: translateX(-50%) rotateZ(-60deg);
`;

const TriangleLineThree = styled(TriangleLine)`
  transform-origin: center left;
  transform: translateX(-50%) rotateZ(60deg);
`;
