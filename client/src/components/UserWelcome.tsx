import { useRef, useState } from "react";
import StyledButton from "./Button";
import StyledInput from "./Input";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  gap: 1em;
`;

const UserWelcome = () => {
  const [name, setName] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmitName = () => {
    setName(nameRef.current!.value);
    nameRef.current!.value = "";
  };
  return (
    <>
      <p>Welcome to the timer challege, {name ?? "Unknown User"}</p>
      <StyledDiv>
        <StyledInput placeholder="Enter name" ref={nameRef} />
        <StyledButton onClick={handleSubmitName}>Submit</StyledButton>
      </StyledDiv>
    </>
  );
};

export default UserWelcome;
