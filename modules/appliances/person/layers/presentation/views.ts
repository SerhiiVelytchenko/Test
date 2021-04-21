import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 50px 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const PersonImgContainer = styled.div`
  display: flex;
  flex: 2;
  background-color: #3F888F;

  img {
    display: block;
    width: 200px;
    background-color: #3F888F;
  }
`;

export const PersonDetailsContainer = styled.div`
  flex: 1;
  margin-left: 75px;
  border: 2px solid #C5D0E6;
  border-radius: 10px;
`;

export const PersonName = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const PersonInfoContainer = styled.div`
width: 500px;
`;

export const ViewButton = styled.button`

  margin: 5px 0px 5px 250px;
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
