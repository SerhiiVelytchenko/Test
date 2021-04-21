import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { Card } from '../../compoonents/card/index';
// context
import { ProductsAPIContext } from '../api/people/index';
import { ProductsBLContext } from '../business/index';
// views
import { Wrapper } from './views';

const ProductsPresentation = () => {
  const { isLoading } = React.useContext(ProductsAPIContext);
  const { productsList } = React.useContext(ProductsBLContext);

  return (
    <Wrapper>
      <ContentLoader isLoading={isLoading}>
        {productsList.map((product) => (
          <Card {...product} key={product.id} />
        ))}
      </ContentLoader>
    </Wrapper>
  );
};

export { ProductsPresentation };
