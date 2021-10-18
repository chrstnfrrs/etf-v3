import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import BlockContent from '@sanity/block-content-to-react';
import {
  AH1,
  AH2,
  AH3,
  AH4,
  AH5,
  AH6,
  ASubtitle,
} from 'aspire-components-react';

import { AllowAny } from '../../types/index.d';

const BlockRenderer = (props: AllowAny) => {
  const { style = 'normal' } = props.node;

  if (style === 'h1') {
    return <AH1 type='strong'>{props.children}</AH1>;
  }

  if (style === 'h2') {
    return <AH2 type='strong'>{props.children}</AH2>;
  }

  if (style === 'h3') {
    return <AH3 type='strong'>{props.children}</AH3>;
  }

  if (style === 'h4') {
    return <AH4 type='strong'>{props.children}</AH4>;
  }

  if (style === 'h5') {
    return <AH5 type='strong'>{props.children}</AH5>;
  }

  if (style === 'h6') {
    return <AH6 type='strong'>{props.children}</AH6>;
  }

  if (style === 'subtitle-1') {
    return <ASubtitle>{props.children}</ASubtitle>;
  }

  if (style === 'subtitle-2') {
    return <ASubtitle as='subtitle-2'>{props.children}</ASubtitle>;
  }

  return BlockContent.defaultSerializers.types.block(props);
};

const serializers = {
  types: {
    block: BlockRenderer,
    // @ts-ignore
    button: ({ node: { link } }) => <a href={link.route}>{link.text}</a>,
  },
};

const PlaceholderBlock = ({ content }: AllowAny): JSX.Element => (
  <BlockContent blocks={content} serializers={serializers} />
);

export { PlaceholderBlock };
