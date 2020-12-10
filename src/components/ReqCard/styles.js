import styled, { css } from 'styled-components';

export const CardBlock = styled.div`
  // 반응형 적용 파트
  width: calc(100% / 3 - 0.339rem);
  &:nth-child(3n + 1) {
    margin-right: 0.5rem;
  }
  &:nth-child(3n + 3) {
    margin-left: 0.5rem;
  }
  margin-bottom: 0.5rem;
  @media screen and (max-width: ${(props) => props.theme.responsive.wide}) {
    width: calc(100% / 2 - 1rem);
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    width: 100%;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    width: 100%;
  }

  font-size: 1rem;
  padding: 1.5rem 1rem;
  border: 1px solid ${(props) => props.theme.palette.cardBorder};
  border-radius: 5px;
  color: ${(props) => props.theme.palette.cardNormal};
  transition: border 100ms ease-in-out;
  &:hover {
    border: 1px solid ${(props) => props.theme.palette.cardActive};
  }
  .item {
    // 기본 마진
    margin-bottom: 0.5rem;
  }
  .item2 {
    // 더 큰 마진
    margin-bottom: 1.5rem;
  }
  .title {
    font-size: 1.2rem;
    font-weight: 700;
  }
  .status {
    color: ${(props) => props.theme.palette.cardStatus};
    border: 1.8px solid ${(props) => props.theme.palette.cardStatus};
    padding: 0.3rem;
    border-radius: 15px;
  }
  .client {
  }
  .due {
    color: ${(props) => props.theme.palette.cardDue};
  }
  .separator {
    background: ${(props) => props.theme.palette.cardBorder};
    height: 1px;
    width: 100%;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const BottomWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  .card-value {
    font-weight: 600;
  }
`;

export const ColWrapper = styled.div`
  div {
    margin-bottom: 0.5rem;
  }
  margin-right: 3rem;
`;

export const BtnWrapper = styled.div`
  display: inline-block;
`;

export const Botton = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  ${(props) =>
    props.isFill
      ? css`
          background: ${(p) => p.theme.palette.cardActive};
          color: white;
          margin-right: 1rem;
          border: 2px solid ${(p) => p.theme.palette.cardActive};
        `
      : css`
          background: white;
          color: ${(p) => p.theme.palette.cardActive};
          border: 2px solid ${(p) => p.theme.palette.cardActive};
        `}
`;
