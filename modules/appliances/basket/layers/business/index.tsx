/* eslint-disable valid-typeof */
import * as React from 'react';
// context
import { BasketProductsAPIContext } from '../api/people';
// mock
import { Technics } from '@md-modules/shared/mockAppliances';
import { BasketModalContext } from '../../basket-modal-context';

export interface TechnicsBasketList extends Technics {
  orderNumber?: number;
}

interface Context {
  productsBasketList: Technics[] | undefined;
}

const BasketBLContext = React.createContext<Context>({
  productsBasketList: []
});

const BasketBLContextProvider: React.FC = ({ children }) => {
  const { Appliances } = React.useContext(BasketProductsAPIContext);
  const { idProductBasket } = React.useContext(BasketModalContext);

  const productsList = React.useMemo<TechnicsBasketList[]>(
    () => {
      if (!Appliances) {
        return [];
      }
      return Appliances;
    },
    [Appliances]
  );

  const productsBasketList = React.useMemo<TechnicsBasketList[] | undefined>(
    () => {
      return (
        idProductBasket.map((el) => {
          const product = (productsList.find((production) => production.id === el.id));
          if (product === undefined) {
            return {};
          }
          product.orderNumber = el.count;
          return product;
        }));
    }, [productsList, idProductBasket]
  );

  return (
    <BasketBLContext.Provider
      value={{
        productsBasketList
      }}
    >
      {children}
    </BasketBLContext.Provider>
  );
};

export { BasketBLContextProvider, BasketBLContext };
