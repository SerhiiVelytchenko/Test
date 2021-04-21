import * as React from 'react';
import { Technics } from '@md-modules/shared/mockAppliances';
import { MouseEventHandler } from 'react';

interface Context {
  basket: Technics[];
  setBasket: (basket: Technics[]) => void;
  active: boolean;
  setActive: (active: boolean) => void;
  api: Technics[] | undefined;
  setApi: (api: Technics[] | undefined) => void;
  handleClickBasket: MouseEventHandler<HTMLButtonElement>;
}

const noop = () => (undefined as any);

const BasketContext = React.createContext<Context>({
  basket: [],
  setBasket: noop,
  active: true,
  setActive: noop,
  api: undefined,
  setApi: noop,
  handleClickBasket: noop
});

const BasketContextProvider: React.FC = ({ children }) => {
  const [basket, setBasket] = React.useState<Technics[]>([]);
  const [active, setActive] = React.useState(false);
  const [api, setApi] = React.useState<Technics[]>();

  const handleClickBasket: MouseEventHandler<HTMLButtonElement> = ({ currentTarget }) => {
    const currentApi = api?.find(({ id }) => id === currentTarget.name);
    if (currentApi) setBasket([...basket, currentApi]);
  };

  return (
    <BasketContext.Provider value={{ basket, setBasket, handleClickBasket, api, setApi, active, setActive }}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketContextProvider, BasketContext };
