import axios from "axios";

const api = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1/carros",
});

const getMarcas = async () => {
  try {
    const response = await api.get("/marcas");
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar marcas: ${error}`);
  }
};

const getModelos = async (marcaId) => {
  try {
    const response = await api.get(`/marcas/${marcaId}/modelos`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar modelos: ${error}`);
  }
};

const getAnos = async (marcaId, modeloId) => {
  try {
    const response = await api.get(
      `/marcas/${marcaId}/modelos/${modeloId}/anos`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar anos: ${error}`);
  }
};

export { getMarcas, getModelos, getAnos };
