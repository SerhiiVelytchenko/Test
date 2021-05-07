import * as React from 'react';
import { MouseEventHandler } from 'react';

const noop = () => (undefined as any);

interface IDProductBasket {
  id: string,
  count: number
}

interface Context {
  active: boolean;
  setActive: (active: boolean) => void;
  handleClickBasket: MouseEventHandler<HTMLButtonElement>;
  idProductBasket: IDProductBasket[];
  handleRemove: MouseEventHandler<HTMLButtonElement>;
  handleClickBasketCountPlus: MouseEventHandler<HTMLButtonElement>;
  handleClickBasketCountMinus: MouseEventHandler<HTMLButtonElement>;
}

const BasketModalContext = React.createContext<Context>({
  active: false,
  setActive: noop,
  handleClickBasket: noop,
  idProductBasket: [],
  handleRemove: noop,
  handleClickBasketCountPlus: noop,
  handleClickBasketCountMinus: noop
});

const BasketModalContextProvider: React.FC = ({ children }) => {
  const [active, setActive] = React.useState(false);
  const [idProductBasket, setIdProductBasket] = React.useState<IDProductBasket[]>([]);

  const handleClickBasket: MouseEventHandler<HTMLButtonElement> = ({ currentTarget }) => {
    const value = idProductBasket.findIndex(el => el.id === currentTarget.id);
    if (value === -1) {
      return setIdProductBasket([...idProductBasket, { id: currentTarget.id, count: 1 }]);
    }
  };

  const handleClickBasketCountPlus: MouseEventHandler<HTMLButtonElement> = ({ currentTarget }) => {
    return setIdProductBasket(idProductBasket.map(el => el.id === currentTarget.id ? { ...el, count: el.count + 1 } : el));
  };

  const handleClickBasketCountMinus: MouseEventHandler<HTMLButtonElement> = ({ currentTarget }) => {
    return setIdProductBasket(idProductBasket.map(el => el.id === currentTarget.id ? { ...el, count: el.count - 1 } : el));
  };

  const handleRemove: MouseEventHandler<HTMLButtonElement> = ({ currentTarget }) => {
    setIdProductBasket(
      [...idProductBasket.slice(0, idProductBasket.findIndex(el => el.id === currentTarget.id)),
        ...idProductBasket.slice(idProductBasket.findIndex(el => el.id === currentTarget.id) + 1, idProductBasket.length)
      ]);
    if (idProductBasket.length === 1) {
      setTimeout(() => setActive(false), 600);
    }
  };

  return (
    <BasketModalContext.Provider value={{ active, setActive, handleClickBasket, idProductBasket, handleRemove, handleClickBasketCountPlus, handleClickBasketCountMinus }}>
      {children}
    </BasketModalContext.Provider>
  );
};

export { BasketModalContextProvider, BasketModalContext };
