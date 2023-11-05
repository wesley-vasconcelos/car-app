import React, { useEffect, useState } from "react";
import { Container, Section } from "../styles/styles";
import SearchCars from "../pages/searchCars";


export default function Home() {  

  return (
      <Container>
        <Section>
          <SearchCars />
        </Section>
         
      </Container>
  );
}
