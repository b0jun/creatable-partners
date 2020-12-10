import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const NoDataBlock = styled.div`
  border: 1px solid ${(props) => props.theme.palette.cardBorder};
  color: ${(props) => props.theme.palette.cardDue};
  padding: 3rem 0;
  text-align: center;
`;
