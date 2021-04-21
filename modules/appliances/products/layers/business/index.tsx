import * as React from 'react';
// context
import { ProductsAPIContext } from '../api/people/index';
// mock
import { Technics } from '@md-modules/shared/mockAppliances';
import { BasketContext } from '@md-modules/appliances/basket/basketProvider';




interface Context {
  productsList: Technics[];
}

const ProductsBLContext = React.createContext<Context>({
  productsList: []
});

const ProductsBLContextProvider: React.FC = ({ children }) => {
  
  // add business logic here
  const { Appliances } = React.useContext(ProductsAPIContext);

  const productsList = React.useMemo<Technics[]>(
    () => {
      if (!Appliances) {
        return [];
      }

      return Appliances.map(el => el);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [typeof Appliances === 'undefined']
  );

  return (
    <ProductsBLContext.Provider
      value={{
        productsList
      }}
    >
      {children}
    </ProductsBLContext.Provider>
  );
};

export { ProductsBLContextProvider, ProductsBLContext};
