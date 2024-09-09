import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  font-family: cursive;
  text-align: center;
`;

const StyledSpan = styled.span`
  color: #00d9ffed;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeading>
        The <StyledSpan>Almost</StyledSpan> Final Countdown
      </StyledHeading>
      <p style={{ fontSize: "1rem" }}>
        Stop the timer once you estimate that time is (almost) up
      </p>
    </StyledHeader>
  );
};

export default Header;
