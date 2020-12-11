import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Block = styled.div`
  height: 4rem;
  width: 100%;
  background: ${(props) => props.theme.palette.header};
  color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
`;

export const HeaderWrapper = styled.div`
  height: 4rem;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  span {
    font-size: 1.5rem;
    font-weight: 700;
    padding-right: 0.3rem;
  }
`;
export const Menu = styled.div`
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    display: none;
  }
  margin-left: auto;
  display: flex;
  .separator {
    background: white;
    width: 0.1rem;
    margin: 0 1.5rem;
    height: 1.3rem;
  }
`;
export const MenuItem = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  .logo {
    width: 17px;
    height: 16px;
    line-height: 2rem;
    margin-right: 0.5rem;
  }
`;

export const StyledBurger = styled.button`
  display: none;
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    display: flex;
  }
  flex-direction: column;
  justify-content: space-around;
  width: 1.8rem;
  height: 1.8rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }
  margin-right: 1.5rem;

  div {
    width: 1.8rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export const SideWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
`;

export const SideMenu = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  background: white;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
`;
