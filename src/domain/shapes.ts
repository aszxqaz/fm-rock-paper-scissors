import iconPaper from "../assets/icon-paper.svg";
import iconRock from "../assets/icon-rock.svg";
import iconScissors from "../assets/icon-scissors.svg";

export type Result = 1 | 0 | -1;

export type Shape = {
  name: string;
  icon: string;
  bg: string;
  shadow: string;
  compare: (other: Shape) => Result;
};

export const shapes: Shape[] = [
  {
    name: "paper",
    icon: iconPaper,
    bg: "linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
    shadow: "hsl(229, 64%, 46%)",
    compare: (other) =>
      other.name == "paper" ? 0 : other.name == "rock" ? 1 : -1,
  },
  {
    name: "scissors",
    icon: iconScissors,
    bg: "linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
    shadow: "hsl(28, 77%, 44%)",
    compare: (other) =>
      other.name == "scissors" ? 0 : other.name == "paper" ? 1 : -1,
  },
  {
    name: "rock",
    icon: iconRock,
    bg: "linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
    shadow: "hsl(347, 75%, 35%)",
    compare: (other) =>
      other.name == "rock" ? 0 : other.name == "scissors" ? 1 : -1,
  },
];

export function getRandomShape() {
  const index = Math.trunc(Math.random() * shapes.length);
  return shapes[index];
}
