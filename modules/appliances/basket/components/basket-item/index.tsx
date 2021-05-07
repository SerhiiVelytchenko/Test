import * as React from 'react';
import { CardPrice, ViewButton, CardWrapper, CardImgWrapper, CardImg, Wrapper, CardName, CardCounter } from './views';
import { SetCount } from '../count';
import { BasketModalContext } from '../../basket-modal-context';
import { TechnicsBasketList } from './../../layers/business/index';

interface Count {
  count: number;
  setCount: (count: number) => void;
}

const BasketItem: React.FC<TechnicsBasketList > = ({ name, id, url, price, orderNumber }) => {
  const [count, setCount] = React.useState<Count>(orderNumber);
  const { handleRemove } = React.useContext(BasketModalContext);

  return (
<CardWrapper id={id}>
  <Wrapper>
    <CardImgWrapper>
      <CardImg src={url} alt={name}/>
    </CardImgWrapper>
  </Wrapper>

  <Wrapper>
    <CardName>{name}</CardName>
    <CardCounter><SetCount id={id} count={count} setCount={setCount}/></CardCounter>
  </Wrapper>

  <Wrapper>
    <CardPrice>{count}x{price}</CardPrice>
    <ViewButton id={id} onClick={ handleRemove }>
      Delete
    </ViewButton>
  </Wrapper>

</CardWrapper>

  );
};

export { BasketItem };
