import {
  mix, lighten, adjustHue
} from 'polished';
import styled from 'styled-components';

interface IProgressrops {
  progress: number;
}

const getColorByProgress = (progress: number): string => {
  if (progress <= 0.5) {
    const parsedProgress = (progress * 2);
    return mix((parsedProgress > 100 ? 100 : parsedProgress), '#FED600', '#C81E13');
  }
  const parsedProgress = (progress - 0.5) * 2;
  return mix((parsedProgress > 100 ? 100 : parsedProgress), '#0AAF60', '#FED600');
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 224px;

  strong {
    margin-left: 16px;
    color: ${(props) => props.theme.colors.textDark};
  }
`;

export const BarContainer = styled.div<IProgressrops>`
  width: 128px;
  height: 6px;
  border-radius: 3px;
  background: ${(props) => lighten(0.4, getColorByProgress(props.progress))};
`;

export const Bar = styled.div<IProgressrops>`
  width: ${(props) => props.progress * 100}%;
  height: 100%;

  background: ${(props) => getColorByProgress(props.progress)};
`;
