import React from "react";
import { Container, Section } from "../../styles/styles";
import SearchCars from "../../pages/searchCars";


export default function Home() {  


  return (
    <>
      <head>
        <link
        rel="icon"
        href='../../teste'
      />
      </head>
      <Container>
        <Section>
          <SearchCars />
        </Section>
       
      </Container>
    </>
  );
}
