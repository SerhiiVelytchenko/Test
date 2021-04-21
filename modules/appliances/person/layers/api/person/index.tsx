import * as React from 'react';
// libs
import { useRouter } from 'next/router';
// utils
import { useQuery } from '@md-utils/mock/query';
// mock
import { Appliances, Technics } from '@md-modules/shared/mockAppliances';

interface Context {
  person: Technics | undefined;
  isLoading: boolean;
}

const PersonAPIContext = React.createContext<Context>({
  person: undefined,
  isLoading: false
});

const PersonAPIContextProvider: React.FC = ({ children }) => {
  const { query } = useRouter();

  const { data, loading } = useQuery(Appliances.find(({ id }) => id === query.id));

  return (
    <PersonAPIContext.Provider
      value={{
        person: data,
        isLoading: loading
      }}
    >
      {children}
    </PersonAPIContext.Provider>
  );
};

export { PersonAPIContextProvider, PersonAPIContext };
