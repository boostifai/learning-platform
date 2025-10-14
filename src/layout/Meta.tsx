'use client';

import Head from 'next/head';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      {props.canonical && <link rel="canonical" href={props.canonical} />}
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {props.canonical && <meta property="og:url" content={props.canonical} />}
      <meta property="og:locale" content={AppConfig.locale} />
      <meta property="og:site_name" content={AppConfig.site_name} />
    </Head>
  );
};

export { Meta };
