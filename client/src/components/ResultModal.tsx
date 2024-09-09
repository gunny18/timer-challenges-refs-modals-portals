import { forwardRef, Ref, useImperativeHandle, useRef } from "react";
import StyledButton from "./Button";
import styled from "styled-components";
import { createPortal } from "react-dom";

interface ResultModalPropsI {
  time: number;
  remainingTime: number;
  ref?: Ref<ModalRef>;
  onReset: () => void;
}

type ModalRef = {
  open: () => void;
};
const StyledDialogBody = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  &::backdrop {
    background-color: salmon;
  }
`;

const StyledDialog = styled.dialog`
  position: absolute;
  top: 30%;
  left: 40%;
`;

const ResultModal = forwardRef<ModalRef, ResultModalPropsI>(
  function ResultModal({ time, remainingTime, onReset }, ref) {
    const dialog = useRef<HTMLDialogElement>(null);

    const userLost = remainingTime <= 0;
    useImperativeHandle(
      ref,
      () => {
        return {
          open() {
            dialog.current!.showModal();
          },
        };
      },
      []
    );

    const score = Math.round((1 - remainingTime / (time * 1000)) * 100);

    return createPortal(
      <StyledDialog ref={dialog} onClose={onReset}>
        <StyledDialogBody>
          {userLost && <p>You Lost</p>}
          {!userLost && <p>Score: {score}</p>}
          <p>
            The target time was <strong>{time} seconds.</strong>
          </p>
          <p>
            You stopped the timer with{" "}
            <strong>{(remainingTime / 1000).toFixed(2)}</strong>
          </p>
          <form method="dialog" onSubmit={onReset}>
            <StyledButton>Close</StyledButton>
          </form>
        </StyledDialogBody>
      </StyledDialog>,
      document.getElementById("modal") as HTMLElement
    );
  }
);

export default ResultModal;
