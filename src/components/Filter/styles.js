import styled from 'styled-components';

export const FilterBlock = styled.div`
  display: flex;
  margin-bottom: 3rem;
  justify-content: space-between;
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    flex-direction: column;
    .top {
      margin-bottom: 1.5rem;
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
  }
`;
