import styled, { keyframes } from "styled-components";
import type { Shape } from "../domain/shapes";

type TurnShapeProps = {
  shape: Shape;
  splashed?: boolean;
  entered?: boolean;
  onClick?: VoidFunction;
};

function TurnShape({ shape, splashed, onClick, entered }: TurnShapeProps) {
  return (
    <Wrapper
      onClick={onClick}
      $entered={entered}
      className={`${entered ? "entered" : ""}`}
    >
      {splashed ? (
        <>
          <OuterSplashCircle $scale={1.4} $delay="0.7s" />
          <OuterSplashCircle $scale={1.9} $delay="0.6s" />
          <OuterSplashCircle $scale={2.4} $delay="0.5s" />
        </>
      ) : null}
      <ShadowOuter
        $bg={shape.shadow}
        data-is-hoverable={onClick ? "true" : "false"}
      >
        <OuterHoverCircle />
        <Outer $bg={shape.bg}>
          <ShadowInner>
            <Inner>
              <img src={shape.icon} />
            </Inner>
          </ShadowInner>
        </Outer>
      </ShadowOuter>
    </Wrapper>
  );
}

export default TurnShape;

const entered = keyframes`
  0% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Wrapper = styled.div<{ $entered?: boolean }>`
  position: relative;
  width: 100%;
  user-select: none;

  &.entered {
    animation: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0ms forwards ${entered};
  }
`;

const ShadowOuter = styled.div<{ $bg: string }>`
  position: relative;
  z-index: 0;
  width: 100%;
  aspect-ratio: 0.975369458;
  border-radius: 50%;
  background: ${(props) => props.$bg};
  padding-bottom: 4.4%;

  &[data-is-hoverable="true"] {
    cursor: pointer;
  }
`;

const Outer = styled.div<{ $bg: string }>`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: ${(props) => props.$bg};
  padding: 11.9% 11.6% 9.8% 11.6%;
`;

const OuterCircle = styled.div`
  position: absolute;
  z-index: -1;
  inset: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  pointer-events: none;
`;

const OuterHoverCircle = styled(OuterCircle)`
  transition: all 0.15s ease-in-out;

  ${ShadowOuter}[data-is-hoverable="true"]:hover & {
    opacity: 1;
    transform: scale(1.27, 1.22);
  }
`;

const splashInOne = (scale: number) => keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: scale(${scale});
  }
`;

const OuterSplashCircle = styled(OuterCircle)<{
  $scale: number;
  $delay: string;
}>`
  animation: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${(props) => props.$delay}
    forwards ${(props) => splashInOne(props.$scale)};
`;

const ShadowInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: #babfd4;
  padding-top: 5.6%;
`;

const Inner = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-image: linear-gradient(to top, #f3f3f3, #dadada);

  > img {
    width: 45%;
  }
`;
