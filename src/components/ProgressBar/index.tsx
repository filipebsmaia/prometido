import React, { useMemo } from 'react';

import {
  Container, BarContainer, Bar
} from './styles';

interface IProgressBarProps {
  progress?: number;
}

const ProgressBar = ({ progress = 0 }: IProgressBarProps): JSX.Element => {
  const percent = useMemo(() => {
    const formater = new Intl.NumberFormat('pt-BR', {
      maximumFractionDigits: 2
    });
    return `${formater.format(progress)} %`;
  }, [progress]);
  return (
    <Container>
      <BarContainer progress={progress / 100}>
        <Bar progress={progress / 100} />
      </BarContainer>
      <strong>{percent}</strong>
    </Container>
  );
};

export default ProgressBar;
