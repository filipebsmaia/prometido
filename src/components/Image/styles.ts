import styled from 'styled-components';

interface IContainerProps {
  width?: number | string;
  height?: number | string;
}

export const Container = styled.div<IContainerProps>`
  width: ${(props) => (typeof props.width === 'number' ? `${props.width}px` : props.width || 'auto')};
  height: ${(props) => (typeof props.height === 'number' ? `${props.height}px` : props.height || 'auto')};
`;
