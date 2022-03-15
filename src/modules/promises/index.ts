import { tags } from './prefeito_colbert_martins_feira_de_santana_ba_2021_2024';

export const promiseTags = [...tags];
export const promiseTagColor: IPromiseTagColor = {
  Saúde: '#5FFC39',
  Educação: '#FF9700',
  Segurança: '#FE5722',
  'Defesa Civil': '#E71E62',
  'Programa Antidrogas': '#673BB7',
  'Desenvolvimento Social': '#FEC107',
  'Mobilidade Urbana': '#9C28B1',
  'Meio Ambiente': '#CDDC39',
  'Proteção aos Animais': '#AF6107',
  Habitação: '#4CB050',
  Cultura: '#FFFF00',
  'Desenvolvimento Econômico': '#2196F3',
  'Esporte e Lazer': '#3F51B5',
  Infraestrutura: '#7B331C',
  Turismo: '#547A04',
  'Gestão e Planejamento Público': '#16EFE2'
};

export type IPromiseTags = typeof promiseTags[number];

export type IPromiseObject = {
  description: string;
};

export type IPromiseData = Record<IPromiseTags, IPromiseObject[]>;

type IPromiseTagColor = Record<IPromiseTags, string>;

