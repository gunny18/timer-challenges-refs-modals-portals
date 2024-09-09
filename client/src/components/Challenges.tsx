import styled from "styled-components";
import TimerChallenge from "./TimerChallenge";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
const Challenges = () => {
  return (
    <StyledContainer>
      <TimerChallenge title="Easy" duration={1} />
      <TimerChallenge title="Not Easy" duration={5} />
      <TimerChallenge title="Getting tough" duration={10} />
      <TimerChallenge title="Pros only" duration={15} />
    </StyledContainer>
  );
};

export default Challenges;
