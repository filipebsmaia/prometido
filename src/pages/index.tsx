import React from 'react';

import type { NextPage } from 'next';

import Menu from '@components/Menu';
import SEO from '@components/SEO';

import { Container } from './styles';

const Home: NextPage = () => (
  <Container>
    <Menu />
    <SEO title="Home" />
    <h1> Welcome to <a href="https://nextjs.org">Next.js!</a></h1>
  </Container>
);

export default Home;
