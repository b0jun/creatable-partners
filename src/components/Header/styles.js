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
