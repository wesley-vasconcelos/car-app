import React, { useEffect, useState } from 'react';
import { useCarros } from '../../context/CarrosContext';
import * as S from './styles';
import { getMarcas, getModelos, getAnos } from '../../pages/api/api.js';
import CustomSelect from '../../components/customSelect'
import ButtonComponent from '../../components/StoreButton/'
import CarInfo from '../../components/cardCar';
import { SelectChangeEvent } from '@mui/material';

const SearchCars = () => {
  const { state, dispatch } = useCarros();
  const {  modeloSelecionado, anoSelecionado } = state;

  const [selectedMarcaId, setSelectedMarcaId] = useState<string>('');
  const [selectedModeloId, setSelectedModeloId] = useState<string>('');
  const [modelos, setModelos] = useState<any[]>([]);
  const [marcas, setMarcas] = useState<any[]>([]);
  const [anos, setAnos] = useState<any[]>([]);
  const [carroInfo, setCarroInfo] = useState<any>(null);

  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const data = await getMarcas();
        setMarcas(data)
        dispatch({ type: 'SET_MARCAS', payload: data });
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    if (marcas.length === 0) {
      fetchMarcas();
    }
  }, [dispatch, marcas.length]);

  useEffect(() => {
    if (selectedMarcaId) {
      fetchModelos(selectedMarcaId);
    }
  }, [selectedMarcaId]);

  useEffect(() => {
    if (selectedMarcaId && selectedModeloId) {
      fetchAnos(selectedMarcaId, selectedModeloId);
    }
  }, [selectedMarcaId, selectedModeloId]);

  const fetchModelos = async (marcaId: string) => {
    try {
      const data = await getModelos(marcaId);
      setModelos(data.modelos || []);
      dispatch({ type: 'SET_MODELOS', payload: data.modelos || [] });
    } catch (error) {
      console.error('Erro ao buscar modelos:', error);
    }
  };

  const fetchAnos = async (marcaId: string, modeloId: string) => {
    try {
      const data = await getAnos(marcaId, modeloId);
      setAnos(data || []);
      dispatch({ type: 'SET_ANOS', payload: data.anos || [] });
    } catch (error) {
      console.error('Erro ao buscar anos:', error);
    }
  };

  const handleMarcaChange = (e: SelectChangeEvent<string>) => {
    setSelectedMarcaId('');
    const selectedMarcaId = e.target.value;
    setSelectedMarcaId(selectedMarcaId);
    dispatch({ type: 'SET_MODELOS', payload: selectedMarcaId });
    setModelos([]); 
  };
  


  const handleModeloChange = (e: SelectChangeEvent<string>) => {
    const selectedModelo = e.target.value;
    setSelectedModeloId(selectedModelo);
    dispatch({ type: 'SET_MODELOS', payload: selectedModelo });
  };

  const handleAnoChange = (e: SelectChangeEvent<string>) => {
    const selectedAno = e.target.value;
    dispatch({ type: 'SET_ANOS', payload: selectedAno });
  };

  

  const handleBuscarClick = async () => {
    try {
      const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedMarcaId}/modelos/${selectedModeloId}/anos/${anoSelecionado}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar informações do carro');
      }
      const data = await response.json();
      setCarroInfo(data);
    } catch (error) {
      console.error('Erro ao buscar informações do carro:', error);
    }
  };
  

  return (
    <S.Container>
      <S.Content>
      <CustomSelect
        value={selectedMarcaId || ''}
        options={marcas}
        onChange={handleMarcaChange}
        label='Marca'
        />
      <CustomSelect
        value={selectedModeloId || ''}
        options={modelos}
        onChange={handleModeloChange}
        label='Modelo'
      />
      <CustomSelect
        value={anoSelecionado || ''}
        options={anos}
        onChange={handleAnoChange}
        label='Ano'
        />
      <br />
      <ButtonComponent
        onClick={handleBuscarClick}
        maxSize="100%"
        disabled={!selectedMarcaId && !selectedModeloId && !anoSelecionado}
        label="Buscar"
        color="#14199a" 
        />
      </S.Content>
      {
        carroInfo &&
        <div style={{ marginTop: '60px'}}>
          <CarInfo carroInfo={carroInfo} />
        </div>
      }
    </S.Container>
  );
};

export default SearchCars;
