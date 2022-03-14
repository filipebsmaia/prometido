import React from 'react';

import type { NextPage } from 'next';

import SEO from '@components/SEO';

const Home: NextPage = () => (
  <>
    <SEO title="Home" />
    <h1> Welcome to <a href="https://nextjs.org">Next.js!</a></h1>
  </>
);

export default Home;
