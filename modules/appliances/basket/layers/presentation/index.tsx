import * as React from 'react';
import { BasketModalContext } from '../../basket-modal-context';
import { BasketItem } from '@md-modules/appliances/basket/components/basket-item';
import { Modal, ModalContent, CardFooterTitle, CardBlok } from './views';
import { BasketBLContext } from '../business';

const BasketPresentation: React.FC = () => {
  const { active, setActive } = React.useContext(BasketModalContext);
  const { productsBasketList } = React.useContext(BasketBLContext);

  return (
  <Modal opacity={active ? 1 : undefined} pointerEvents={active ? 'all' : undefined} onClick={() => setActive(false)}>
    <ModalContent transform={active ? 'scale(1)' : undefined} onClick={e => e.stopPropagation()}>
      <CardBlok>
        {productsBasketList?.map((product) => (
            <BasketItem {...product} key={product.id} />
        ))}
      </CardBlok>
      <CardFooterTitle>
        { productsBasketList?.length ? `Sum: ${productsBasketList.reduce((ac, value) => ac + value.price * value?.orderNumber, 0)}` : 'Ви не вибрали жодного товару'}
      </CardFooterTitle>
    </ModalContent>
  </Modal>

  );
};

export { BasketPresentation };
