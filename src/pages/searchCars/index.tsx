import React, { useEffect, useState } from 'react';
import { useCarros } from '../../context/CarrosContext';
import { getMarcas, getModelos, getAnos, getCarInfo } from '../../pages/api/api.js';
import CustomSelect from '../../components/customSelect';
import ButtonComponent from '../../components/StoreButton';
import CarInfo from '../../components/cardCar';
import { SelectChangeEvent, Snackbar, Alert, AlertColor } from '@mui/material';
import * as S from './styles';

const SearchCars = () => {
  const { state, dispatch } = useCarros();
  const { modeloSelecionado, anoSelecionado } = state;

  const [selectedMarcaId, setSelectedMarcaId] = useState<string>('');
  const [selectedModeloId, setSelectedModeloId] = useState<string>('');
  const [modelos, setModelos] = useState<any[]>([]);
  const [marcas, setMarcas] = useState<any[]>([]);
  const [anos, setAnos] = useState<any[]>([]);
  const [carroInfo, setCarroInfo] = useState<any>(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState<AlertColor | undefined>('success');

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

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
      const data = await getCarInfo(selectedMarcaId, selectedModeloId, anoSelecionado);
      setCarroInfo(data);
      setAlertSeverity('success');
      setAlertMessage('Informações do carro encontradas com sucesso.');
    } catch (error) {
      setAlertSeverity('error');
      setAlertMessage(`Erro ao buscar informações do carro: ${error}`);
    } finally {
      setAlertOpen(true);
    }
  };

  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const data = await getMarcas();
        setMarcas(data);
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
        {
          carroInfo &&
          <div style={{ marginTop: '60px' }}>
            <CarInfo carroInfo={carroInfo} />
          </div>
        }
        <Snackbar
          open={alertOpen}
          autoHideDuration={3000} // Tempo reduzido para 3 segundos
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Posicionamento no topo direito
        >
          <Alert
            onClose={handleAlertClose}
            severity={alertSeverity}
            style={{ top: '70px', right: '20px', position: 'fixed' }} // Ajustes de posição
          >
    {alertMessage}
  </Alert>
</Snackbar>

      </S.Content>
    </S.Container>
  );
};

export default SearchCars;
