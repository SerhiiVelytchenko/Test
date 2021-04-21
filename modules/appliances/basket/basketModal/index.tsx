import * as React from 'react';
import { BasketContext } from '@md-modules/appliances/basket/basketProvider';
import { BasketItem } from 'modules/appliances/basket/basketItem';
import { Modal, ModalContent, CardFooterTitle, CardBlok } from 'modules/appliances/basket/basketModal/views';

const BasketModal: React.FC = () => {
  const { active, setActive, basket } = React.useContext(BasketContext);
  return (
  <Modal opacity={active ? 1 : undefined} pointerEvents={active ? 'all' : undefined} onClick={() => setActive(false)}>
    <ModalContent transform={active ? 'scale(1)' : undefined} onClick={e => e.stopPropagation()}>
      <CardBlok>
        {basket?.map((product) => (
            <BasketItem {...product} key={product.id} />
        ))}
      </CardBlok>
      <CardFooterTitle>
        { basket.length ? `Sum: ${basket.reduce((ac, value) => ac + value.price, 0)}` : 'Ви не вибрали жодного товару'}
      </CardFooterTitle>
    </ModalContent>
  </Modal>

  );
};

export { BasketModal };
