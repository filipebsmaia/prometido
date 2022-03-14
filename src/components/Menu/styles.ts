import styled from 'styled-components';

export const Container = styled.nav`
  height: 100%;
  background-color: #fff;

  border-right: 2px solid ${(props) => props.theme.colors.gray3};
  
`;

export const LinksList = styled.ul`
  margin-top: 32px;

  li {
    display: flex;
    align-items: center;

    height: 44px;
    width: 320px;
    padding: 0 24px;
    transition: all .3s ease-in-out;

    
    a {
      margin-left: 16px;
      text-decoration: none;
      font-weight: 600;
    }
    
    &:hover {
      cursor: pointer;
      a, svg {
        color: ${(props) => props.theme.colors.primary};
      }
    }


    a, svg {
      color: ${(props) => props.theme.colors.gray1};
    }
  }

  li:first-child {
    a {      
      font-weight: 700;
    }

    a, svg  {
      color: ${(props) => props.theme.colors.primaryDark};
    }
}
  
`;
