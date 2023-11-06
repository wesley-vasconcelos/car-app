import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
position: absolute !important;
top: 50% !important;
left: 50% !important;
transform: translate(-50%, -50%) !important;
border-radius: 8px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
padding: 20px;
`;

export const Content = styled.div`
  max-width: 800px;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #000;
  font-weight: 700; 
  font-family: 'roboto';
  text-align: center;
`;
export const SubTitle = styled.h2`
  font-size: 22px;
  color: #000;
  font-weight: 500; 
  font-family: 'roboto';
  text-align: center;
`;
export default function DummyComponent() {
  return null;
}