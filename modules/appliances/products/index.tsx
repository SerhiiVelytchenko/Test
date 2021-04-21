import * as React from 'react';

import { ProductsAPIContextProvider } from './layers/api/people/index';
import { ProductsBLContextProvider } from './layers/business/index';
import { ProductsPresentation } from './layers/presentation/index';

const ProductsContainer = () => (
    <ProductsAPIContextProvider>
      <ProductsBLContextProvider>
        <ProductsPresentation />
      </ProductsBLContextProvider>
    </ProductsAPIContextProvider>
);

export { ProductsContainer };
