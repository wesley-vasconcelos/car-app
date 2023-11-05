import * as S from './styles';
import React from 'react';

interface ButtonProps {
  maxSize?: string;
  disabled?: boolean;
  color?: string;
  onClick: () => void;
  label: string; // Novo
}

const ButtonComponent: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return <S.Button {...rest}>{label}</S.Button>; 
};

export default ButtonComponent;
