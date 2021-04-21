import * as React from 'react';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { ProductsContainer } from '../../modules/appliances/products/index';

const ProductsPage = () => (
  <MainLayout>
    <ProductsContainer />
  </MainLayout>
);

export default ProductsPage;
