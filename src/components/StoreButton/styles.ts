import styled, { css } from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  ${({ maxSize }) =>
    maxSize &&
    css`
      max-width: ${maxSize};
    `}

  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
      color: #fff;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
      background-color: #f1f1f1;
      color: #000;
    `}
`;
