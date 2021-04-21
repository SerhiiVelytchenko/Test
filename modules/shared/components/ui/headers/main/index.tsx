import * as React from 'react';
// view components
import { MenuItem } from '@md-ui/menu-items/main';
import { Logo } from '@md-ui/logos/main';
// constants
import { menuItems } from './constants';
// views
import { Wrapper, IWrapper, LWrapper, RWrapper, InWrapper } from './views';
import { LogoBasket } from '../../LogoBasket/main';

const Header = () => {
  return (
    <Wrapper>
      <IWrapper>
        <LWrapper>
          <Logo />
        </LWrapper>
        <RWrapper>
          {menuItems.map(({ l, h }) => (
            <MenuItem key={l} href={h} label={l} />
          ))}
          <InWrapper>
            <LogoBasket/>
          </InWrapper>
        </RWrapper>
      </IWrapper>
    </Wrapper>
  );
};

export { Header };
