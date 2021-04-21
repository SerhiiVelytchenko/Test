import styled from 'styled-components';

export const CardWrapper = styled.div`
  display:flex;
  border-radius: 5px;
  overflow: hidden;
  border: 2px solid #C5D0E6;
  margin: 0px 0px 5px 0px;
`;

export const CardImgWrapper = styled.div`
height:100px;
width: 20.3vw;
`;

export const CardImg = styled.img`
padding: 5px 5px 5px 10px;
height:100px;
`;

export const CardFooter = styled.div`
display:flex;
flex-direction: column;
justify-content: space-evenly;
`;

export const CardFooterBlok = styled.div`
display: flex;

justify-content: space-around;
width: 350px;
`;

export const CardFooterTitle = styled.div`
  line-height: 1.28;
  font-size: 20px;
  color: black;
  margin: 0;
  text-align: center;
`;

export const ViewButton = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.green200};
  color: ${({ theme }) => theme.colors.green300};
  outline: none;
  transition: background-color 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: #FFCBDB;
    color:#B03F35;
    border: 1px solid #AB274F;
  }
`
