import React from "react";
import { Container } from "../../styles/styles";
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
          <SearchCars />       
      </Container>
    </>
  );
}
