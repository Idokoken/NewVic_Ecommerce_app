import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  min-height: 70vh;
  background-color: aliceblue;
  padding: 30px;
  font-family: "Times New Roman", Times, serif;
`;

function Messages() {
  return (
    <Wrapper>
      <h2 className="text-center ">You don't have any message at the moment</h2>
    </Wrapper>
  );
}

export default Messages;
