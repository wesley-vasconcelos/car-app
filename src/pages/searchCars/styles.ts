import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export default function DummyComponent() {
  return null;
}