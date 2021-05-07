import * as React from 'react';
import { BasketModalContext } from '@md-modules/appliances/basket/basket-modal-context';
import { ViewButton, CardImg, ProductBasket } from './views';
import { BasketContainer } from '../../../../../appliances/basket/index';

const LogoBasket = () => {
  const { active, setActive, idProductBasket } = React.useContext(BasketModalContext);

  return (
    <>
      <ViewButton onClick={() => setActive(true)}>
        <CardImg src="/static/logos/Basket-Logo.png" alt="Basket-Logo"/>
        <ProductBasket item={idProductBasket.length ? '#82DE59' : ''}>
          {idProductBasket.length ? idProductBasket.length : ''}
        </ProductBasket>
      </ViewButton>
      {active ? <BasketContainer /> : null}
    </>
  );
};

export { LogoBasket };
