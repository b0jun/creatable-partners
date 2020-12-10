import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  @media screen and (max-width: ${(props) => props.theme.responsive.wide}) {
    max-width: 1000px;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    // 992px
    max-width: 800px;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    max-width: 500px;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding: 0 0.8rem;
    width: 100%;
  }
`;
