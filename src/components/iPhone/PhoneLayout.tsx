import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

export default function PhoneLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 37.5rem;
  height: 81.2rem;
  border: 1px solid black;
`;
