import * as React from 'react';
import { BasketProductsAPIContextProvider } from './layers/api/people';
import { BasketBLContextProvider } from './layers/business';
import { BasketPresentation } from './layers/presentation';

const BasketContainer = () => (
<BasketProductsAPIContextProvider>
    <BasketBLContextProvider>
        <BasketPresentation />
    </BasketBLContextProvider>
</BasketProductsAPIContextProvider>
);

export { BasketContainer };
