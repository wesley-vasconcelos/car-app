import { render, screen } from "@testing-library/react";
import SearchCars from ".";

describe("Componente SearchCars", () => {
  it("verifica a presença de textos iniciais", () => {
    render(<SearchCars />);
    const titleText = screen.getByText("Buscar...");
    const buttonLabel = screen.getByText("Buscar");

    expect(titleText).toBeInTheDocument();
    expect(buttonLabel).toBeInTheDocument();
  });

  it("verifica a atualização de textos após a interação", () => {
    render(<SearchCars />);
    const marcaSelect = screen.getByLabelText("Marca");

    expect(screen.queryByText("Marca")).toBeInTheDocument();
    expect(screen.queryByText("Toyota")).not.toBeInTheDocument();

    fireEvent.change(marcaSelect, { target: { value: "Toyota" } });

    expect(screen.queryByText("Marca")).not.toBeInTheDocument();
    expect(screen.queryByText("Toyota")).toBeInTheDocument();
  });

  it("verifica a exibição de informações após a busca", () => {
    render(<SearchCars />);
    const buscarButton = screen.getByText("Buscar");

    fireEvent.click(buscarButton);

    expect(screen.queryByText("Tabela Fipe com Toyota Corolla 2022")).toBeInTheDocument();
    expect(screen.queryByText("R$ 50.000,00")).toBeInTheDocument();
  });
});
