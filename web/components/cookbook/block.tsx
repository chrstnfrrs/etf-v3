import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

import { ALLOW_ANY } from '../../types/app';
import { PlaceholderH1, PlaceholderH3 } from '../placeholders';

const BlockRenderer = (props: ALLOW_ANY) => {
  const { style = 'normal' } = props.node;

  if (style === 'h1') {
    return <PlaceholderH1>{props.children}</PlaceholderH1>;
  }

  if (style === 'h3') {
    return <PlaceholderH3>{props.children}</PlaceholderH3>;
  }

  return BlockContent.defaultSerializers.types.block(props);
};

const serializers = {
  types: {
    block: BlockRenderer,
  },
};

const PlaceholderBlock = ({ content }: ALLOW_ANY): JSX.Element => {
  return <BlockContent blocks={content} serializers={serializers} />;
};

export { PlaceholderBlock };
