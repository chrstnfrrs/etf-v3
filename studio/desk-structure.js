import S from '@sanity/desk-tool/structure-builder';
import { MdEmail, MdGridOn, MdHome, MdSettings } from 'react-icons/md';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Application Settings')
        .icon(MdSettings)
        .child(
          S.document()
            .title('Application Settings')
            .schemaType('settings')
            .documentId('appSettings'),
        ),
      S.listItem()
        .title('Home')
        .icon(MdHome)
        .child(
          S.document()
            .title('Home')
            .schemaType('homePage')
            .documentId('homePage'),
        ),
      S.listItem()
        .title('Blog Page')
        .icon(MdGridOn)
        .child(
          S.document()
            .title('Blog Page')
            .schemaType('pageBlog')
            .documentId('pageBlog'),
        ),
      S.listItem()
        .title('Contact Page')
        .icon(MdEmail)
        .child(
          S.document()
            .title('Contact Page')
            .schemaType('pageContact')
            .documentId('pageContact'),
        ),

      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'button',
            'descriptionListSection',
            'hero',
            'homePage',
            'keyValuePair',
            'layoutSplitFields',
            'layoutSplit',
            'links',
            'link',
            'linkOptions',
            'navigation',
            'navigationOptions',
            'settings',
            'pageContact',
            'contactForm',
            'pageHeading',
            'pageBlog',
            'row',
            'sectionTestimonial',
            'service',
            'testimonial',
            'pages',
            'layoutSplitContent',
          ].includes(listItem.getId()),
      ),
    ]);
