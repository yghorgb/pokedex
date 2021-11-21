import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

export const Card = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
  }
`;

export const Sidebar = styled.div`
  width: 200px;
  height: 100%;
  background-color: #fff;
`;
