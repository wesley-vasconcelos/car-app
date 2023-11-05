import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface Carro {
  id: string;
  nome: string;
}

interface Modelo extends Carro {
  anos: number[];
}

interface Marca extends Carro {
  modelos: Modelo[];
}

interface CarrosState {
  marcas: Marca[];
  modeloSelecionado: string | null;
  anoSelecionado: string | null;
}

interface CarrosContextProps {
  state: CarrosState;
  dispatch: React.Dispatch<Action>;
}

const CarrosContext = createContext<CarrosContextProps | undefined>(undefined);

export const useCarros = (): CarrosContextProps => {
  const context = useContext(CarrosContext);
  if (!context) {
    throw new Error('useCarros must be used within a CarrosProvider');
  }
  return context;
}

type Action =
  | { type: 'SET_MARCAS'; payload: Marca[] }
  | { type: 'SET_MODELO'; payload: string | null }
  | { type: 'SET_ANO'; payload: string | null };

const carrosReducer = (state: CarrosState, action: Action): CarrosState => {
  switch (action.type) {
    case 'SET_MARCAS':
      return { ...state, marcas: action.payload };
    case 'SET_MODELO':
      return { ...state, modeloSelecionado: action.payload };
    case 'SET_ANO':
      return { ...state, anoSelecionado: action.payload };
    default:
      return state;
  }
};

interface CarrosProviderProps {
  children: ReactNode;
}

export const CarrosProvider = ({ children }: CarrosProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(carrosReducer, {
    marcas: [],
    modeloSelecionado: null,
    anoSelecionado: null,
  });

  return (
    <CarrosContext.Provider value={{ state, dispatch }}>
      {children}
    </CarrosContext.Provider>
  );
};
