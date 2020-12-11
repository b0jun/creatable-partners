import React from 'react';

import { Block, HeaderWrapper, HomeLink, Menu, MenuItem, StyledBurger } from './styles';

const Header = () => (
  <>
    <Block>
      <HeaderWrapper>
        <StyledBurger>
          <div />
          <div />
          <div />
        </StyledBurger>
        <HomeLink to="/">
          <span>CAPA</span>파트너스
        </HomeLink>
        <Menu>
          <MenuItem>
            <img
              className="logo"
              src="https://i.ibb.co/gzxWMWy/client-iogo.png"
              alt="client-iogo"
            />
            A 가공업체
          </MenuItem>
          <div className="separator" />
          <MenuItem>로그아웃</MenuItem>
        </Menu>
      </HeaderWrapper>
    </Block>
  </>
);

export default Header;
