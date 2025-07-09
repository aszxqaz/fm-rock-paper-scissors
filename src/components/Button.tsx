import styled from "styled-components";

const Button = styled.button<{ $filled?: boolean }>`
  line-height: 1;
  padding: 0.7rem 2.25rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15625rem;
  background-color: transparent;
  border-radius: 0.5rem;
  border: 1px solid white;
  color: white;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    color: #3b4262;
    background-color: white;
  }

  ${(props) =>
    !props.$filled
      ? ""
      : `
        background-color: white;
        color: #3B4262;
        &:hover,
        &:focus-visible {
          color: #DB2E4D;
        };
  `}
`;

export default Button;
