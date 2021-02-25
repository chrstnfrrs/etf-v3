import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from 'react-icons/md'
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
            .documentId('appSettings')
        ),
      
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => ![
          'button',
          'hero',
          'links',
          'link',
          'linkOptions',
          'navigation',
          'navigationOptions',
          'settings',
        ].includes(listItem.getId()))
    ])