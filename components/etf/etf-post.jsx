import * as React from 'react';
import styled from '@emotion/styled';
import * as DateFns from 'date-fns';

import { PlaceholderBlock } from '../cookbook/block';

const AH1 = styled.h1``;
const AH3 = styled.h3``;
const AImage = styled.img`
  border-radius: 4px 4px 0 0;
  height: 35vh !important;
`;

const ETFPost = ({ post }) => {
  return (
    <div>
      <AImage
        alt={post.mainImage.alt}
        className='a-image'
        src={post.mainImage.asset?.url}
      />
      <AH1>{post.title}</AH1>
      <AH3>{DateFns.format(new Date(post.publishedAt), 'MMM do, yyyy')}</AH3>
      <PlaceholderBlock content={post.bodyRaw} />
    </div>
  );
};

export { ETFPost };
