import React from 'react';
// @ts-ignore
import BlockContent from '@sanity/block-content-to-react';
import styled from '@emotion/styled';

import { AllowAny } from '../../types/index.d';

const PlaceholderH1 = styled.h1`
  line-height: 2;
`;
const PlaceholderH3 = styled.h3`
  line-height: 1.5;
`;

const BlockRenderer = (props: AllowAny) => {
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

const PlaceholderBlock = ({ content }: AllowAny): JSX.Element => (
  <BlockContent blocks={content} serializers={serializers} />
);

export { PlaceholderBlock };
