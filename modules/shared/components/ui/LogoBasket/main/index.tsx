import * as React from 'react';
// components
import { BasketContext } from '@md-modules/appliances/basket/basketProvider';
import { BasketModal } from '@md-modules/appliances/basket/basketModal';
import { ViewButton, CardImg } from './views'

const LogoBasket = () => {
  const { active, setActive } = React.useContext(BasketContext);

  return (
    <>
      <ViewButton onClick={() => setActive(true)}>
        <CardImg src="/static/logos/Basket-Logo.png" alt="Basket-Logo"/>
      </ViewButton>
      {active ? <BasketModal /> : null}
    </>
  );
};

export { LogoBasket };
