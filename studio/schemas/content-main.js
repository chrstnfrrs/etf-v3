import React from 'react';
import { AHeading, AText } from 'aspire-components-react';

const AH1 = (props) => <AHeading type='h1'>{props.children}</AHeading>;
const AH2 = (props) => <AHeading type='h2'>{props.children}</AHeading>;
const AH3 = (props) => <AHeading type='h3'>{props.children}</AHeading>;
const AH4 = (props) => <AHeading type='h4'>{props.children}</AHeading>;
const AH5 = (props) => <AHeading type='h5'>{props.children}</AHeading>;
const AH6 = (props) => <AHeading type='h6'>{props.children}</AHeading>;
const AS1 = (props) => <AHeading type='subtitle-1'>{props.children}</AHeading>;
const AS2 = (props) => <AHeading type='subtitle-2'>{props.children}</AHeading>;
const AB1 = (props) => <AText as='body-1'>{props.children}</AText>;
const AB2 = (props) => <AText as='body-2'>{props.children}</AText>;
const ATextStrong = (props) => <AText type='strong'>{props.children}</AText>;

export default {
  name: 'contentMain',
  of: [
    {
      lists: [
        {
          title: 'Bullet',
          value: 'bullet',
        },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            fields: [
              {
                name: 'href',
                title: 'URL',
                type: 'url',
              },
            ],
            name: 'link',
            title: 'URL',
            type: 'object',
          },
        ],
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {
            blockEditor: { render: ATextStrong },
            title: 'Strong',
            value: 'strong',
          },
          {
            title: 'Emphasis',
            value: 'em',
          },
        ],
      },
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        {
          title: 'Subtitle 1',
          value: 'subtitle-1',
          blockEditor: { render: AS1 },
        },
        {
          title: 'Subtitle 2',
          value: 'subtitle-2',
          blockEditor: { render: AS2 },
        },
        { title: 'Body 1', value: 'body-1', blockEditor: { render: AB1 } },
        { title: 'Body 2', value: 'body-2', blockEditor: { render: AB2 } },
        { title: 'Heading 1', value: 'h1', blockEditor: { render: AH1 } },
        { title: 'Heading 2', value: 'h2', blockEditor: { render: AH2 } },
        { title: 'Heading 3', value: 'h3', blockEditor: { render: AH3 } },
        { title: 'Heading 4', value: 'h4', blockEditor: { render: AH4 } },
        { title: 'Heading 5', value: 'h5', blockEditor: { render: AH5 } },
        { title: 'Heading 6', value: 'h6', blockEditor: { render: AH6 } },
      ],
      title: 'Block',
      type: 'block',
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'mainImage',
      value: 'mainImage',
    },
    {
      type: 'button',
      value: 'button',
    },
  ],
  title: 'Main Content',
  type: 'array',
};
