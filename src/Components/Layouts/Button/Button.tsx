import React from "react";
import styled from "styled-components";

interface ButtonType {
  fig?: "circle" | "square";
  value: string;
  isDone?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const BTN = styled.button<{ isDone?: boolean; fig?: "circle" | "square" }>`
  background: ${({ theme, isDone }) =>
    isDone ? theme.color.darkBlue : theme.color.cyan};
  color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme, fig }) =>
    fig === "circle" ? theme.utils["rounded-lg"] : theme.utils["rounded-sm"]};
  padding: 0.75rem 2rem;
  text-transform: capitalize;
  box-shadow: ${({ theme }) => theme.utils["shadow-b-sm"]};
  transition: all 0.2s;
  font-weight: ${({ theme }) => theme.weight.md};

  :hover {
    opacity: 0.8;
  }

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonType> = ({
  fig = "circle",
  value,
  isDone,
  onClick,
  disabled,
}) => {
  return (
    <BTN
      fig={fig}
      isDone={isDone}
      onClick={onClick}
      disabled={disabled}
      data-btn-re
    >
      {value}
    </BTN>
  );
};

export default Button;
