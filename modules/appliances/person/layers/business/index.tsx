import * as React from 'react';
import { PersonAPIContext } from '../api/person/index';

import { Technics } from '@md-modules/shared/mockAppliances';

interface Context {
  personInfo: Technics | undefined;
  personInfoOdj: Array<{label: string, value: string | number}>;
}

const PersonBLContext = React.createContext<Context>({
  personInfo: undefined,
  personInfoOdj: []
});

const PersonBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { person } = React.useContext(PersonAPIContext);

  const personInfo = React.useMemo(
    () => {
      if (!person) {
        return undefined;
      }
      return person;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [typeof person === 'undefined']
  );
  const personInfoOdj = React.useMemo(
    () => {
      if (!person) {
        return [];
      }
      return [
        { label: 'Гарантія', value: person.info.guarantee },
        { label: 'Держава виробник', value: person.info.producingCountry },
        { label: 'Рівень енергозбереження', value: person.info.energyClass },
        { label: 'Вага', value: person.info.weight },
        { label: 'Колір', value: person.info.productColor },
        { label: 'Особливості', value: person.info.feature },
        { label: 'Ціна', value: person.price }
      ];
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [typeof person === 'undefined']
  );

  return (
    <PersonBLContext.Provider
      value={{
        personInfo,
        personInfoOdj
      }}
    >
      {children}
    </PersonBLContext.Provider>
  );
};

export { PersonBLContextProvider, PersonBLContext };

// interface PersonInfo {
//   label: string;
//   value: string;
// }

// interface Context {
//   personInfo: PersonInfo[];
// }

// const PersonBLContext = React.createContext<Context>({
//   personInfo: []
// });

// const PersonBLContextProvider: React.FC = ({ children }) => {
//   // add business logic here
//   const { person } = React.useContext(PersonAPIContext);

//   const personInfo = React.useMemo<PersonInfo[]>(
//     () => {
//       if (!person) {
//         return [];
//       }
// console.log(person)
//       return [
//         { label: 'Guarantee', value: person.info.guarantee },
//         { label: 'Producing Country', value: person.info.producingCountry },
//         { label: 'Energy Class', value: person.info.energyClass },
//         { label: 'Weight', value: person.info.weight},
//         { label: 'Product Color', value: person.info.productColor },
//         { label: 'Feature', value: person.info.feature }
//       ];
//     },
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [typeof person === 'undefined']
//   );

//   return (
//     <PersonBLContext.Provider
//       value={{
//         personInfo
//       }}
//     >
//       {children}
//     </PersonBLContext.Provider>
//   );
// };

// export { PersonBLContextProvider, PersonBLContext };
