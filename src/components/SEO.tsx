
import Head from 'next/head';

import React, { useMemo } from 'react';

import getOriginURL from 'utils/getOriginURL';

type ISEOImageProps = {
  ogImage?: string | null;
  ogImageWidth?: number;
  ogImageHeight?: number;
} | {
  ogImage: string;
  ogImageWidth: number;
  ogImageHeight: number;
};

type ISEOProps = ISEOImageProps & {
  title: string;
  description?: string;
  keywords?: 'default' | string;
  ogDescription?: string | null;
  shouldIndexPage?: boolean;
  shouldExcludeTitleSuffix?: boolean;
};

const keywordsArray = ['dados abertos de feira'];

export const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogImageWidth,
  ogImageHeight,
  ogDescription,
  shouldIndexPage = true,
  shouldExcludeTitleSuffix = false
}: ISEOProps): JSX.Element => {
  const pageTitle = `${title} ${
    !shouldExcludeTitleSuffix ? '| Dados abertos de Feira' : ''
  }`;

  const pageImage = useMemo(() => {
    const originUrl = getOriginURL();
    if (!ogImage) {
      return `${originUrl}/assets/dadosabertosdefeira.png`;
    }
    if (ogImage.startsWith('http://') || ogImage.startsWith('https://')) {
      return ogImage;
    }
    return `${originUrl}/${ogImage}`;
  }, [ogImage]);

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && (
        <meta
          name="description"
          key="description"
          content={description}
        />
      )}
      {keywords && (
        keywords === 'default' ? (
          <meta
            name="keywords"
            key="keywords"
            content={keywordsArray.join(', ')}
          />
        ) : (
          <meta
            name="keywords"
            key="keywords"
            content={keywords}
          />
        )
      )}

      {pageImage && <meta name="image" key="image" content={pageImage} />}
      {!shouldIndexPage && <meta name="robots" key="robots" content="noindex,nofollow" />}

      <meta name="viewport" key="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="MobileOptimized" key="MobileOptimized" content="375" />
      <meta name="HandheldFriendly" key="HandheldFriendly" content="True" />
      <meta name="theme-color amkey=-color" content="#FAFBFD" />
      <meta name="msapplication-TileColor amkey=-TileColor" content="#FAFBFD" />
      <meta name="referrer" key="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" key="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      {(ogDescription || description) && <meta property="og:description" content={ogDescription || description} />}
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content={`${ogImageWidth || 1200}`} />
      <meta property="og:image:height" content={`${ogImageHeight || 630}`} />

      <meta name="twitter:title" key="twitter:title" content={pageTitle} />
      <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@DadosDeFeira" />
      <meta name="twitter:creator" content="@DadosDeFeira" />
      <meta name="twitter:image" key="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" key="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" key="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" key="twitter:image:width" content={`${ogImageWidth || 1200}`} />
      <meta name="twitter:image:height" key="twitter:image:height" content={`${ogImageHeight || 630}`} />
      <link rel="icon" href="/favicon.png" type="image/png" />
    </Head>
  );
};

export default SEO;
