import * as React from 'react';
import { MouseEventHandler } from 'react';
import { BasketModalContext } from '../../basket-modal-context';
import { Wrapper, ViewButton, CardItem } from './views';

const SetCount: React.FC = ({ id, count, setCount, dataId }) => {
  const { handleClickBasketCountPlus, handleClickBasketCountMinus } = React.useContext(BasketModalContext);

  const handleClickCountPlus: MouseEventHandler<HTMLButtonElement> = (event) => {
    setCount(count + 1);
    handleClickBasketCountPlus(event);
  };

  const handleClickCountMinus: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (count > 0) {
      setCount(count - 1);
      handleClickBasketCountMinus(event);
    }
  };

  return (
    <Wrapper>
            <ViewButton id={id} onClick={handleClickCountMinus}>
                -
            </ViewButton>
            <CardItem>{count}</CardItem>
            <ViewButton id={id} onClick={handleClickCountPlus}>
                +
            </ViewButton>
    </Wrapper>
  );
};

export { SetCount };
