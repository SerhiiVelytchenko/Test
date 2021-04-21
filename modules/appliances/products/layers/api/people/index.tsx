import * as React from 'react';
// utils
import { useQuery } from '@md-utils/mock/query';
// mock
import { Technics, Appliances } from '@md-modules/shared/mockAppliances';
import { BasketContext } from '@md-modules/appliances/basket/basketProvider';

interface Context {
  Appliances: Technics[] | undefined;
  isLoading: boolean;
}

const ProductsAPIContext = React.createContext<Context>({
  Appliances: [],
  isLoading: false
});

const ProductsAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const { data, loading } = useQuery(Appliances);
  const { setApi } = React.useContext(BasketContext);
  setApi(data);
  return (
    <ProductsAPIContext.Provider
      value={{
        Appliances: data,
        isLoading: loading
      }}
    >
      {children}
    </ProductsAPIContext.Provider>
  );
};

export { ProductsAPIContextProvider, ProductsAPIContext };
