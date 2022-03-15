import React from 'react';

import {
  FiHome, FiBook, FiInfo
} from 'react-icons/fi';

import Image from '@components/Image';
import { Link } from '@components/Link';

import { Container, LinksList } from './styles';

const Menu = (): JSX.Element => (
  <Container>
    <Image
      src="/assets/logo.svg"
      width={245}
      height={104}
      alt="Logotipo Dados Abertos de Feira"
    />
    <div>
      <LinksList>
        <li>
          <FiHome size={20} />
          <Link href="/">Home</Link>
        </li>
        <li>
          <FiInfo size={20} />
          <Link href="https://dadosabertosdefeira.com.br/#sobre" target="_blank">Sobre nós</Link>

        </li>
        <li>
          <FiBook size={20} />
          <Link href="https://dadosabertosdefeira.com.br/#sobre" target="_blank">Manifesto</Link>
        </li>

      </LinksList>
    </div>
  </Container>
);

export default Menu;
