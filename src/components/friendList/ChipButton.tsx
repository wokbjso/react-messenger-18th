import React from "react";
import styled from "styled-components";

interface ChipBtnProps {
  text: string;
}

export default function ChipButton({ text }: ChipBtnProps) {
  return (
    <ChipBtnWrapper>
      <span>{text}</span>
    </ChipBtnWrapper>
  );
}

const ChipBtnWrapper = styled.div`
  width: 7.1rem;
  height: 2.5rem;
  padding: 0.2rem 0.8rem;
  background-color: ${(props) => props.theme.colors.gray6};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  span {
    ${(props) => props.theme.fontStyles.body2};
    font-weight: 500;
  }
`;