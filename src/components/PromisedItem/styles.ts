import styled from 'styled-components';

export const Container = styled.tr`
  display: flex;
  /* padding: 16px 0; */

  min-height: 72px;
  max-height: 128px;
  width: 100%;

  border-bottom: 2px solid ${(props) => props.theme.colors.gray3};
  
  > td {
    display: flex;
    flex-direction: row;
    

    align-items: center;
    justify-content: center;
    padding: 16px;
    color: ${(props) => props.theme.colors.textDark};
    text-align: center;

    &:nth-child(1) {
      padding: 0;
    }

    &:nth-child(2) {
      max-width: 40em;
      text-align: start;
    }

    &:nth-child(4), &:nth-child(5) {
      width: 200px;
    }
  }
  
`;

export const BarColor = styled.div`
  height: 40px;
  width: 3px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: #f90;
`;
