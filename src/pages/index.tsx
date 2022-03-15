import React, { useMemo } from 'react';

import type { NextPage } from 'next';

import Menu from '@components/Menu';
import PromisedItem from '@components/PromisedItem';
import SEO from '@components/SEO';

import { IPromiseObject, promiseTagColor } from '@modules/promises';
import { promises as colbertPromises } from '@modules/promises/prefeito_colbert_martins_feira_de_santana_ba_2021_2024';

import { Container, Content } from './styles';

const Home: NextPage = () => {
  const promises = useMemo(() => {
    const allPromises: Array<IPromiseObject & { key: string, color: string }> = [];

    const keys = Object.keys(colbertPromises);

    keys.forEach((key: string) => {
      colbertPromises[key].forEach((promise: IPromiseObject) => {
        const parsedPromise = {
          key,
          color: promiseTagColor[key],
          ...promise
        };
        allPromises.push(parsedPromise);
      });
    });

    return allPromises;
  }, []);

  return (
    <Container>
      <SEO title="Home" />
      <Menu />
      <Content>
        <h1> Welcome to <a href="https://nextjs.org">Next.js!</a></h1>
        <table>
          <tbody>
            { promises.map((promise) => (
              <PromisedItem
                description={promise.description}
                tag={promise.key}
                color={promise.color}
                startDate={new Date('2020-01-01')}
                endDate={new Date('2021-01-01')}
              />
            ))}
          </tbody>
        </table>

      </Content>
    </Container>
  );
};

export default Home;
