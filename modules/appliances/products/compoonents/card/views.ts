import styled from 'styled-components';

export const CardWrapper = styled.div`

  border-radius: 5px;
  overflow: hidden;
  border: 2px solid #C5D0E6;
  
`;

export const CardImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardImg = styled.img`
height: 200px;

  
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray500};
  padding: 10px 10px;
`;

export const CardFooterBlok = styled.div`
display: flex;
justify-content: space-evenly;
width: 350px;
`;

export const CardFooterTitle = styled.div`
  font-weight: bold;
  line-height: 1.28;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0px 0px 10px 0px
`;

export const CardFooterTitlePrice = styled.div`
  font-weight: bold;
  line-height: 1.28;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.green300};
  margin: 0
`;

export const ViewButton = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.green200};
  color: #fff;
  outline: none;
  transition: background-color 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: rgba(135, 204, 67, 0.8);
  }
`;





