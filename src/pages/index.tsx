import React from 'react';

import type { NextPage } from 'next';

import Menu from '@components/Menu';
import PromisedItem from '@components/PromisedItem';
import SEO from '@components/SEO';

import { Container, Content } from './styles';

const Home: NextPage = () => (
  <Container>
    <SEO title="Home" />
    <Menu />
    <Content>
      <h1> Welcome to <a href="https://nextjs.org">Next.js!</a></h1>
      <table>
        <tbody>
          <PromisedItem
            description="Implantar programas de valorização, apoio, qualificação e aperfeiçoamento dos profissionais de saúde"
            tag="Saúde"
            startDate={new Date('2020-01-01')}
            endDate={new Date('2021-01-01')}
          />

          <PromisedItem
            description="Engajar os Conselhos Tutelares nas ações preventivas de segurança envolvendo crianças e adolescentes."
            tag="Saúde"
            startDate={new Date('2020-01-01')}
            endDate={new Date('2021-01-01')}
          />

          <PromisedItem
            description="Implantar programas de valorização, apoio, qualificação e aperfeiçoamento dos profissionais de saúde."
            tag="Saúde"
            startDate={new Date('2020-01-01')}
            endDate={new Date('2021-01-01')}
          />
        </tbody>
      </table>

    </Content>
  </Container>
);

export default Home;
