import S from "@sanity/desk-tool/structure-builder";
 
export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Menu')
        .child(
          S.document()
            .schemaType('menu')
            .documentId('homemenuPage')
        ),
      
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => !['menu', 'link', 'hero', 'button'].includes(listItem.getId()))
    ])