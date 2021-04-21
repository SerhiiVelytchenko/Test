import * as React from 'react';
import { BasketContext } from '../basketProvider/index';
import { Technics } from '@md-modules/shared/mockAppliances';
import { CardFooterTitle, ViewButton, CardWrapper, CardImgWrapper, CardImg, CardFooter } from './views';

const BasketItem: React.FC<Technics> = ({ name, id, url, price }) => {
  const { setBasket, basket } = React.useContext(BasketContext);

  const handleDelete = () => {
    setBasket(
      [...basket.slice(0, basket.findIndex(el => el.id === id)),
        ...basket.slice(basket.findIndex(el => el.id === id) + 1, basket.length)
      ]);
  };

  return (
    <CardWrapper id={id}>
      <CardImgWrapper>
        <CardImg src={url} alt={name}/>
      </CardImgWrapper>
      <CardFooter>
        <CardFooterTitle>{price}</CardFooterTitle>
        <ViewButton onClick={handleDelete}>
          Delete
        </ViewButton>
      </CardFooter>
    </CardWrapper>

  );
};

export { BasketItem };
