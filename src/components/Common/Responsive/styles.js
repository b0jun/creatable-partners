import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    max-width: 760px;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding: 0 0.8rem;
    width: 100%;
  }
`;
