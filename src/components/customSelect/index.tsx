import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

interface CustomSelectProps {
  value: string;
  label: string; 
  options: { codigo: string; nome: string }[];
  onChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ value, label, options, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel style={{ zIndex: '0'}}>{label}</InputLabel>
      <br />
      <Select
        value={value}
        onChange={onChange}
        style={{ width: '100%', bottom: '20px' , minWidth: '200px'}}
        displayEmpty
  
      >
        {options.map((option) => (
          <MenuItem key={option.codigo} value={option.codigo}>
            {option.nome}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
