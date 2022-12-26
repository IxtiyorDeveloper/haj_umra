import React from "react";
import styled from "@emotion/styled";

const StyledButton1 = styled.button`
  border: 0;
  padding: ${(props: any) => (props.padding ? props.padding : "16px 56px")};
  border-radius: ${(props: any) =>
    props.borderRadius ? props.borderRadius : "100px"};
  background-color: ${(props: any) =>
    props.backgroundColor ? props.backgroundColor : ""};
  cursor: pointer;
  color: ${(props: any) => (props.color ? props.color : "#000")};
`;

const StyledButton = (props: any) => <StyledButton1 {...props} />;

export default StyledButton
