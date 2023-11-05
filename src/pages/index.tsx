import React, { useEffect, useState } from "react";
import { Container } from "../styles/styles";
import SearchCars from "../pages/searchCars";


export default function Home() {  

  return (
      <Container>
          <SearchCars />         
      </Container>
  );
}
