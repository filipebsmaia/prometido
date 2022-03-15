import React, { useCallback, useMemo } from 'react';

import ProgressBar from '@components/ProgressBar';

import { Container, BarColor } from './styles';

interface IPromisedItemProps {
  description: string;
  tag: string;
  color: string;
  startDate: Date;
  endDate: Date;
}

const PromisedItem = ({ description, tag, color, startDate, endDate }: IPromisedItemProps): JSX.Element => {
  const { parsedStartDate, parsedEndDate } = useMemo(() => {
    const formatter = new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    return {
      parsedStartDate: formatter.format(startDate),
      parsedEndDate: formatter.format(endDate)
    };
  }, [startDate, endDate]);

  return (
    <Container>
      <td>
        <BarColor color={color} />
      </td>
      <td>
        {description}
      </td>
      <td>
        {tag}
      </td>
      <td>
        {parsedStartDate}
      </td>
      <td>
        {parsedEndDate}
      </td>
      <td>
        <ProgressBar progress={(100 / 3)} />
      </td>
    </Container>
  );
};

export default PromisedItem;
