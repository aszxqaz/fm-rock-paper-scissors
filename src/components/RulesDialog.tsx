import type { Ref } from "react";
import styled from "styled-components";
import imgRules from "../assets/image-rules.svg";
import iconClose from "../assets/icon-close.svg";

type RulesDialogProps = {
  ref?: Ref<HTMLDialogElement>;
  onClose: () => void;
};

function RulesDialog({ ref, onClose }: RulesDialogProps) {
  return (
    <Dialog ref={ref}>
      <Title>Rules</Title>
      <RulesImage src={imgRules} alt="rules" />
      <IconClose onClick={onClose} src={iconClose} alt="close button" />
    </Dialog>
  );
}

export default RulesDialog;

const Dialog = styled.dialog`
  border: none;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  padding: 2rem;

  @media (min-width: 500px) {
    &[open] {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    height: max-content;
    max-width: 25rem;
    border-radius: 0.5rem;
  }

  &::backdrop {
    background: #000000ab;
  }
`;

const RulesImage = styled.img`
  max-width: 100%;
`;

const Title = styled.h2`
  position: absolute;
  top: 15%;
  font-size: 2rem;
  font-weight: 700;
  color: #3b4262;
  text-transform: uppercase;

  @media (min-width: 500px) {
    position: unset;
    margin-bottom: 3rem;
    justify-self: flex-start;
  }
`;

const IconClose = styled.img`
  cursor: pointer;
  position: absolute;
  right: 2rem;
  top: 2.3rem;
`;
