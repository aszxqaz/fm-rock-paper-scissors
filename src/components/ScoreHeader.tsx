import styled from "styled-components";
import logo from "../assets/logo.svg";

type ScoreHeaderProps = {
  score: number;
};

function ScoreHeader({ score }: ScoreHeaderProps) {
  return (
    <Container>
      <Wrapper>
        <HeaderLogo src={logo} alt="logo" />
        <HeaderScore>
          <ScoreTitle>Score</ScoreTitle>
          <ScoreScore>{score}</ScoreScore>
        </HeaderScore>
      </Wrapper>
    </Container>
  );
}

export default ScoreHeader;

const Container = styled.div`
  width: 100%;
  padding-inline: 2rem;
  margin-bottom: 6.25rem;

  @media (min-width: 1024px) {
    margin-bottom: unset;
  }
`;

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 44rem;

  // 12px 12px 12px 24px -> 18px 24px 18px 32px
  padding: clamp(0.75rem, 0.58rem + 0.73vw, 1.125rem)
    clamp(0.75rem, 0.41rem + 1.45vw, 1.5rem)
    clamp(0.75rem, 0.58rem + 0.73vw, 1.125rem)
    clamp(1.5rem, 1.27rem + 0.97vw, 2rem);
  border: 2px solid rgba(255, 255, 255, 0.28);
  border-radius: clamp(0.3125rem, 0.0284rem + 1.212vw, 0.9375rem);
  user-select: none;
`;

const HeaderLogo = styled.img`
  width: clamp(5.19rem, 3rem + 9.2vw, 9.9rem);
`;

const HeaderScore = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  text-align: center;
  min-width: clamp(5rem, 3.4rem + 6.76vw, 9.5rem);
  min-height: clamp(4.5rem, 3.5757rem + 3.944vw, 7.125rem);
  border-radius: 0.5rem;
  background: linear-gradient(
    to bottom,
    rgb(255, 255, 255),
    rgb(243, 243, 243)
  );
`;

const ScoreTitle = styled.h2`
  font-size: clamp(0.625rem, 0.45rem + 0.73vw, 1rem);
  font-weight: 600;
  letter-spacing: 20%;
  color: #2a45c2;
  text-transform: uppercase;
`;

const ScoreScore = styled.p`
  font-size: clamp(2.5rem, 1.8rem + 2.9vw, 4rem);
  font-weight: 700;
  line-height: 1;
  color: #565468;
`;
