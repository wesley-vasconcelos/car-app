import React from "react";
import { render, screen } from "@testing-library/react";
import { CarrosProvider } from "../../context/CarrosContext";
import SearchCars from "./index";

jest.describe("SearchCars", () => {
  jest.it("renders title and subtitle", () => {
    render(
      <CarrosProvider>
        <SearchCars />
      </CarrosProvider>
    );

    const titleElement = screen.getByText("Tabela Fipe");
    const subtitleElement = screen.getByText(
      "Consulte o valor de um veículo de forma gratuita"
    );

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });
});
