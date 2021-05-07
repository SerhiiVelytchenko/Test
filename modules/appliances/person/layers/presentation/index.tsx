import * as React from 'react';
// context
import { PersonAPIContext } from '../api/person/index';
import { PersonBLContext } from '../business/index';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { PersonInfo } from '../../components/person-info/index';
// views
import {
  ContentWrapper,
  PersonDetailsContainer,
  PersonImgContainer,
  PersonInfoContainer,
  PersonName,
  Wrapper,
  ViewButton
} from './views';
import { BasketContext } from '@md-modules/appliances/basket-provider';

const PersonPresentation = () => {
  const { isLoading } = React.useContext(PersonAPIContext);
  const { personInfo, personInfoOdj } = React.useContext(PersonBLContext);
  const { handleClickBasket } = React.useContext(BasketContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading}>
          <PersonImgContainer>
            <img src={personInfo?.url} alt={personInfo?.name} />
          </PersonImgContainer>
          <PersonDetailsContainer>
            <PersonName>{personInfo?.name}</PersonName>
            <PersonInfoContainer>
              {personInfoOdj.map((i, idI) => (
                <PersonInfo key={idI} {...i} />
              ))}
            </PersonInfoContainer>
            <ViewButton name = {personInfo?.id} onClick={ handleClickBasket }>
              Корзина
            </ViewButton>

          </PersonDetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { PersonPresentation };
