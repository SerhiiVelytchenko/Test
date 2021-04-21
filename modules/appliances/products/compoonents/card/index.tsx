import * as React from 'react';

// views
import { CardWrapper,CardFooterTitlePrice,CardFooterBlok, CardImgWrapper, CardImg, CardFooter, CardFooterTitle, ViewButton } from './views';
// view components
import { PersonLink } from '../person-link';
import { Technics } from '../../../../shared/mockAppliances/index'
import { BasketContext } from '@md-modules/appliances/basket/basketProvider';

const Card: React.FC<Technics> = ({ name, id, url, price}) => {
  const { handleClickBasket  } = React.useContext(BasketContext)
  return(
  <CardWrapper key={id}>

    <CardImgWrapper>
      <CardImg src={url} alt={`${name}-${id}`} />
    </CardImgWrapper>

    <CardFooter>

        <CardFooterTitle>{name}</CardFooterTitle>

        <CardFooterBlok>
          <CardFooterTitlePrice>{price} грн</CardFooterTitlePrice>
          <PersonLink pId={id}>
            <ViewButton>Details</ViewButton>
          </PersonLink>

          <ViewButton name={id} onClick={handleClickBasket}>
            Корзина
          </ViewButton>

  </CardFooterBlok>

   

    </CardFooter>

  </CardWrapper>


  
  )}

export { Card };
