import * as S from './styles';

interface CarInfoProps {
  carroInfo: {
    Modelo: string;
    Valor: string;
    Marca: string;
    AnoModelo: string;
  };
}

const CarInfo: React.FC<CarInfoProps> = ({ carroInfo }) => {
  return (
    <S.InfoContainer>
      <S.Title>
        Tabela Fipe: Preço {carroInfo.Marca} {carroInfo.Modelo}  {carroInfo.AnoModelo}
      </S.Title>
      <S.ValueBackground>
        <p>Valor: {carroInfo.Valor}</p>
      </S.ValueBackground>
    </S.InfoContainer>
  );
};

export default CarInfo;
