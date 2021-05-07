import * as React from 'react';
// utils
import { useQuery } from '@md-utils/mock/query';
// mock
import { Technics, Appliances } from '@md-modules/shared/mockAppliances';

interface Context {
  Appliances: Technics[] | undefined;
  isLoading: boolean;
}

const BasketProductsAPIContext = React.createContext<Context>({
  Appliances: [],
  isLoading: false
});

const BasketProductsAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const { data, loading } = useQuery(Appliances);

  return (
    <BasketProductsAPIContext.Provider
      value={{
        Appliances: data,
        isLoading: loading
      }}
    >
      {children}
    </BasketProductsAPIContext.Provider>
  );
};

export { BasketProductsAPIContextProvider, BasketProductsAPIContext };
