import React from "react";
import styled from "styled-components";

const SignUpCanvas = styled.div`
  border-radius: 0 0 5px 5px;
  min-height: 82.5vh;
  background: hsl(240, 70%, 30%, 0.25);
`;

const SignUpContainer = () => {
  return <SignUpCanvas>sign up</SignUpCanvas>;
};

export default SignUpContainer;
