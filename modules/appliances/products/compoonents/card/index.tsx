import * as React from 'react';

// views
import { CardWrapper, CardFooterTitlePrice, CardFooterBlok, CardImgWrapper, CardImg, CardFooter, CardFooterTitle, ViewButton } from './views';
// view components
import { PersonLink } from '../person-link';
import { Technics } from '../../../../shared/mockAppliances/index';
import { BasketModalContext } from '@md-modules/appliances/basket/basket-modal-context';

const Card: React.FC<Technics> = ({ name, id, url, price }) => {
  const { handleClickBasket } = React.useContext(BasketModalContext);
  return (
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

            <ViewButton id={id} onClick={ handleClickBasket }>
            Add to cart
            </ViewButton>

    </CardFooterBlok>

    </CardFooter>

  </CardWrapper>

  );
};

export { Card };
