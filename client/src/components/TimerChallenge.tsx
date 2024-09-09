import { FC, useRef, useState } from "react";
import StyledButton from "./Button";
import styled from "styled-components";
import ResultModal from "./ResultModal";

interface TimerChallengePropsI {
  title: string;
  duration: number;
}

type ModalRef = {
  open: () => void;
};

const StyledSection = styled.section`
  background-color: #00fffc;
  color: black;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
`;

const TimerChallenge: FC<TimerChallengePropsI> = ({ title, duration }) => {
  const [timeElapsed, setTimeElapsed] = useState(duration * 1000);
  const timerRef = useRef<number | undefined>();
  const modalRef = useRef<ModalRef>(null);

  const isTimerActive = timeElapsed > 0 && timeElapsed < duration * 1000;

  //   open modal if timer has expired
  if (timeElapsed <= 0) {
    clearInterval(timerRef.current);
    modalRef.current?.open();
  }

  const handleStartTimer = () => {
    timerRef.current = setInterval(() => {
      // update time elapsed
      setTimeElapsed((prev) => prev - 10);
    }, 10);
  };

  const handleResetTimer = () => {
    setTimeElapsed(duration * 1000);
  };

  //   open modal also if stop is clicked
  const handleStopTimer = () => {
    clearInterval(timerRef.current);
    modalRef.current?.open();
  };

  return (
    <>
      <ResultModal
        time={duration}
        ref={modalRef}
        remainingTime={timeElapsed}
        onReset={handleResetTimer}
      />
      <StyledSection>
        <p style={{ textTransform: "uppercase" }}>{title}</p>
        <p>{`${duration} ${duration > 1 ? "seconds" : "second"}`}</p>
        <StyledButton
          onClick={isTimerActive ? handleStopTimer : handleStartTimer}
        >
          {isTimerActive ? "Stop" : "Start"} Challenge
        </StyledButton>
        <p>{isTimerActive ? "Timer is running..." : "Timer inactive"}</p>
      </StyledSection>
    </>
  );
};

export default TimerChallenge;
