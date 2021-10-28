import styled from "styled-components";


export const AllProductContainer = styled.div`
  width: 400px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 25px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* justify-content: space-between; */
  padding-left: 10px;
  padding-right: 10px;
`;

export const Title = styled.h1`
  margin-top: 10px;
  font-size: 25px;
`;
export const Img = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  margin-top: 35px;
  transition: transform 400ms;
  &:hover {
    transform: scale(1.08);
  }
`;

export const InfoContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  background: blueviolet;
  color: white;
  padding: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    cursor: pointer;
  }
`;