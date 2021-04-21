import * as React from 'react';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { PersonContainer } from '../../modules/appliances/person/index';

const PersonPage = () => {
  return (
    <MainLayout>
      <PersonContainer />
    </MainLayout>
  );
};

export default PersonPage;
