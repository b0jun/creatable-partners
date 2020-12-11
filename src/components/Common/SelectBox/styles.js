import styled, { css } from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
`;

export const SelectBoxBlock = styled.div`
  border: 2px solid ${(props) => props.theme.palette.cardDue};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  background: ${(props) => (props.isSelected ? 'black' : 'white')};
  cursor: pointer;
  span {
    margin-right: 0.5rem;
  }
  &:hover {
    border: 2px solid ${(props) => props.theme.palette.cardActive};
  }

  ${(props) =>
    props.isSelected
      ? css`
          background: ${(p) => p.theme.palette.cardActive};
          color: white;
        `
      : css`
          background: white;
        `}
`;

export const CheckList = styled.ul`
  position: absolute;
  width: 8rem;
  padding: 0.8rem;
  background: white;
  border: 2px solid ${(props) => props.theme.palette.cardDue};
  border-radius: 4px;
  margin-top: 0.5rem;
  z-index: 1000;
  div {
    display: flex;
    align-items: center;
  }
  div:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
