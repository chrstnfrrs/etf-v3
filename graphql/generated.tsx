import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  ContactForm?: Maybe<ContactForm>;
  Button?: Maybe<Button>;
  Hero?: Maybe<Hero>;
  Link?: Maybe<Link>;
  Links?: Maybe<Links>;
  LinkOptions?: Maybe<LinkOptions>;
  Navigation?: Maybe<Navigation>;
  NavigationOptions?: Maybe<NavigationOptions>;
  PageBlog?: Maybe<PageBlog>;
  PageContact?: Maybe<PageContact>;
  PageHeading?: Maybe<PageHeading>;
  Post?: Maybe<Post>;
  Pages?: Maybe<Pages>;
  Settings?: Maybe<Settings>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  Document?: Maybe<Document>;
  allContactForm: Array<ContactForm>;
  allButton: Array<Button>;
  allHero: Array<Hero>;
  allLink: Array<Link>;
  allLinks: Array<Links>;
  allLinkOptions: Array<LinkOptions>;
  allNavigation: Array<Navigation>;
  allNavigationOptions: Array<NavigationOptions>;
  allPageBlog: Array<PageBlog>;
  allPageContact: Array<PageContact>;
  allPageHeading: Array<PageHeading>;
  allPost: Array<Post>;
  allPages: Array<Pages>;
  allSettings: Array<Settings>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allDocument: Array<Document>;
};

export type RootQueryContactFormArgs = {
  id: Scalars['ID'];
};

export type RootQueryButtonArgs = {
  id: Scalars['ID'];
};

export type RootQueryHeroArgs = {
  id: Scalars['ID'];
};

export type RootQueryLinkArgs = {
  id: Scalars['ID'];
};

export type RootQueryLinksArgs = {
  id: Scalars['ID'];
};

export type RootQueryLinkOptionsArgs = {
  id: Scalars['ID'];
};

export type RootQueryNavigationArgs = {
  id: Scalars['ID'];
};

export type RootQueryNavigationOptionsArgs = {
  id: Scalars['ID'];
};

export type RootQueryPageBlogArgs = {
  id: Scalars['ID'];
};

export type RootQueryPageContactArgs = {
  id: Scalars['ID'];
};

export type RootQueryPageHeadingArgs = {
  id: Scalars['ID'];
};

export type RootQueryPostArgs = {
  id: Scalars['ID'];
};

export type RootQueryPagesArgs = {
  id: Scalars['ID'];
};

export type RootQuerySettingsArgs = {
  id: Scalars['ID'];
};

export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID'];
};

export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID'];
};

export type RootQueryDocumentArgs = {
  id: Scalars['ID'];
};

export type RootQueryAllContactFormArgs = {
  where?: Maybe<ContactFormFilter>;
  sort?: Maybe<Array<ContactFormSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllButtonArgs = {
  where?: Maybe<ButtonFilter>;
  sort?: Maybe<Array<ButtonSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllHeroArgs = {
  where?: Maybe<HeroFilter>;
  sort?: Maybe<Array<HeroSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllLinkArgs = {
  where?: Maybe<LinkFilter>;
  sort?: Maybe<Array<LinkSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllLinksArgs = {
  where?: Maybe<LinksFilter>;
  sort?: Maybe<Array<LinksSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllLinkOptionsArgs = {
  where?: Maybe<LinkOptionsFilter>;
  sort?: Maybe<Array<LinkOptionsSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllNavigationArgs = {
  where?: Maybe<NavigationFilter>;
  sort?: Maybe<Array<NavigationSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllNavigationOptionsArgs = {
  where?: Maybe<NavigationOptionsFilter>;
  sort?: Maybe<Array<NavigationOptionsSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllPageBlogArgs = {
  where?: Maybe<PageBlogFilter>;
  sort?: Maybe<Array<PageBlogSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllPageContactArgs = {
  where?: Maybe<PageContactFilter>;
  sort?: Maybe<Array<PageContactSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllPageHeadingArgs = {
  where?: Maybe<PageHeadingFilter>;
  sort?: Maybe<Array<PageHeadingSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllPostArgs = {
  where?: Maybe<PostFilter>;
  sort?: Maybe<Array<PostSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllPagesArgs = {
  where?: Maybe<PagesFilter>;
  sort?: Maybe<Array<PagesSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllSettingsArgs = {
  where?: Maybe<SettingsFilter>;
  sort?: Maybe<Array<SettingsSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllSanityImageAssetArgs = {
  where?: Maybe<SanityImageAssetFilter>;
  sort?: Maybe<Array<SanityImageAssetSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllSanityFileAssetArgs = {
  where?: Maybe<SanityFileAssetFilter>;
  sort?: Maybe<Array<SanityFileAssetSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RootQueryAllDocumentArgs = {
  where?: Maybe<DocumentFilter>;
  sort?: Maybe<Array<DocumentSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ContactForm = Document & {
  __typename?: 'ContactForm';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  submit?: Maybe<Scalars['String']>;
};

/** A Sanity document */
export type Document = {
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
};

export type Button = Document & {
  __typename?: 'Button';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
};

export type Link = Document & {
  __typename?: 'Link';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  route?: Maybe<Scalars['String']>;
  linkOptions?: Maybe<LinkOptions>;
};

export type LinkOptions = Document & {
  __typename?: 'LinkOptions';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  decorator?: Maybe<Scalars['String']>;
};

export type Hero = Document & {
  __typename?: 'Hero';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  heroImage?: Maybe<MainImage>;
};

export type MainImage = {
  __typename?: 'MainImage';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** Important for SEO and accessiblity. */
  alt?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
};

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  source?: Maybe<SanityAssetSourceData>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  location?: Maybe<Geopoint>;
  dimensions?: Maybe<SanityImageDimensions>;
  palette?: Maybe<SanityImagePalette>;
  lqip?: Maybe<Scalars['String']>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  alt?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>;
};

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['Float']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
};

export type Links = Document & {
  __typename?: 'Links';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<Link>>>;
};

export type Navigation = Document & {
  __typename?: 'Navigation';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  navigationLinks?: Maybe<Array<Maybe<Links>>>;
  navigationOptions?: Maybe<NavigationOptions>;
};

export type NavigationOptions = Document & {
  __typename?: 'NavigationOptions';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  alignItems?: Maybe<Scalars['String']>;
};

export type PageBlog = Document & {
  __typename?: 'PageBlog';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  /** This field is used for SEO. It will appear in the tab and as the title for search results. */
  title?: Maybe<Scalars['String']>;
  /** This field is used for SEO. It will appear as the description for search results. */
  description?: Maybe<Scalars['String']>;
  pageHeading?: Maybe<Scalars['String']>;
  showPosts?: Maybe<Scalars['Boolean']>;
};

export type PageContact = Document & {
  __typename?: 'PageContact';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  /** This field is used for SEO. It will appear in the tab and as the title for search results. */
  title?: Maybe<Scalars['String']>;
  /** This field is used for SEO. It will appear as the description for search results. */
  description?: Maybe<Scalars['String']>;
  callToActionRaw?: Maybe<Scalars['JSON']>;
  links?: Maybe<Array<Maybe<Link>>>;
  contactForm?: Maybe<ContactForm>;
};

export type PageHeading = Document & {
  __typename?: 'PageHeading';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Post = Document & {
  __typename?: 'Post';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  mainImage?: Maybe<MainImage>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  previewRaw?: Maybe<Scalars['JSON']>;
  bodyRaw?: Maybe<Scalars['JSON']>;
  slug?: Maybe<Slug>;
};

export type Slug = {
  __typename?: 'Slug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type Pages = Document & {
  __typename?: 'Pages';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  route?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<ContactFormOrHeroOrPageHeading>>>;
};

export type ContactFormOrHeroOrPageHeading = ContactForm | Hero | PageHeading;

export type Settings = Document & {
  __typename?: 'Settings';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  navigation?: Maybe<Navigation>;
};

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  source?: Maybe<SanityAssetSourceData>;
};

export type ContactFormFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  submit?: Maybe<StringFilter>;
};

export type Sanity_DocumentFilter = {
  /** All documents referencing the given document ID. */
  references?: Maybe<Scalars['ID']>;
  /** All documents that are drafts. */
  is_draft?: Maybe<Scalars['Boolean']>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['ID']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['ID']>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  nin?: Maybe<Array<Scalars['ID']>>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['String']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['String']>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  nin?: Maybe<Array<Scalars['String']>>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['DateTime']>;
};

export type ContactFormSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  submit?: Maybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC',
}

export type ButtonFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  link?: Maybe<LinkFilter>;
};

export type LinkFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  route?: Maybe<StringFilter>;
  linkOptions?: Maybe<LinkOptionsFilter>;
};

export type LinkOptionsFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  size?: Maybe<StringFilter>;
  weight?: Maybe<StringFilter>;
  decorator?: Maybe<StringFilter>;
};

export type ButtonSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  link?: Maybe<LinkSorting>;
};

export type LinkSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  route?: Maybe<SortOrder>;
  linkOptions?: Maybe<LinkOptionsSorting>;
};

export type LinkOptionsSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  weight?: Maybe<SortOrder>;
  decorator?: Maybe<SortOrder>;
};

export type HeroFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  heading?: Maybe<StringFilter>;
  heroImage?: Maybe<MainImageFilter>;
};

export type MainImageFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  alt?: Maybe<StringFilter>;
  asset?: Maybe<SanityImageAssetFilter>;
  hotspot?: Maybe<SanityImageHotspotFilter>;
  crop?: Maybe<SanityImageCropFilter>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  assetId?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  metadata?: Maybe<SanityImageMetadataFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Float']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Float']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Float']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Float']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Float']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Float']>;
};

export type SanityImageMetadataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  location?: Maybe<GeopointFilter>;
  dimensions?: Maybe<SanityImageDimensionsFilter>;
  palette?: Maybe<SanityImagePaletteFilter>;
  lqip?: Maybe<StringFilter>;
  hasAlpha?: Maybe<BooleanFilter>;
  isOpaque?: Maybe<BooleanFilter>;
};

export type GeopointFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  lat?: Maybe<FloatFilter>;
  lng?: Maybe<FloatFilter>;
  alt?: Maybe<FloatFilter>;
};

export type SanityImageDimensionsFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
  aspectRatio?: Maybe<FloatFilter>;
};

export type SanityImagePaletteFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  darkMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  vibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  dominant?: Maybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  muted?: Maybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  background?: Maybe<StringFilter>;
  foreground?: Maybe<StringFilter>;
  population?: Maybe<FloatFilter>;
  title?: Maybe<StringFilter>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Boolean']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Boolean']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type SanityImageHotspotFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  x?: Maybe<FloatFilter>;
  y?: Maybe<FloatFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
};

export type SanityImageCropFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  top?: Maybe<FloatFilter>;
  bottom?: Maybe<FloatFilter>;
  left?: Maybe<FloatFilter>;
  right?: Maybe<FloatFilter>;
};

export type HeroSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  heading?: Maybe<SortOrder>;
  heroImage?: Maybe<MainImageSorting>;
};

export type MainImageSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  alt?: Maybe<SortOrder>;
  hotspot?: Maybe<SanityImageHotspotSorting>;
  crop?: Maybe<SanityImageCropSorting>;
};

export type SanityImageHotspotSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  x?: Maybe<SortOrder>;
  y?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
};

export type SanityImageCropSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  top?: Maybe<SortOrder>;
  bottom?: Maybe<SortOrder>;
  left?: Maybe<SortOrder>;
  right?: Maybe<SortOrder>;
};

export type LinksFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
};

export type LinksSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
};

export type NavigationFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  navigationOptions?: Maybe<NavigationOptionsFilter>;
};

export type NavigationOptionsFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  alignItems?: Maybe<StringFilter>;
};

export type NavigationSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  navigationOptions?: Maybe<NavigationOptionsSorting>;
};

export type NavigationOptionsSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  alignItems?: Maybe<SortOrder>;
};

export type PageBlogFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  pageHeading?: Maybe<StringFilter>;
  showPosts?: Maybe<BooleanFilter>;
};

export type PageBlogSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  pageHeading?: Maybe<SortOrder>;
  showPosts?: Maybe<SortOrder>;
};

export type PageContactFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  contactForm?: Maybe<ContactFormFilter>;
};

export type PageContactSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  contactForm?: Maybe<ContactFormSorting>;
};

export type PageHeadingFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
};

export type PageHeadingSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type PostFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  mainImage?: Maybe<MainImageFilter>;
  publishedAt?: Maybe<DatetimeFilter>;
  slug?: Maybe<SlugFilter>;
};

export type SlugFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  current?: Maybe<StringFilter>;
};

export type PostSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  mainImage?: Maybe<MainImageSorting>;
  publishedAt?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
};

export type SlugSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  current?: Maybe<SortOrder>;
};

export type PagesFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  route?: Maybe<StringFilter>;
};

export type PagesSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  route?: Maybe<SortOrder>;
};

export type SettingsFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  navigation?: Maybe<NavigationFilter>;
};

export type SettingsSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  navigation?: Maybe<NavigationSorting>;
};

export type SanityImageAssetSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  mimeType?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  metadata?: Maybe<SanityImageMetadataSorting>;
  source?: Maybe<SanityAssetSourceDataSorting>;
};

export type SanityImageMetadataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  location?: Maybe<GeopointSorting>;
  dimensions?: Maybe<SanityImageDimensionsSorting>;
  palette?: Maybe<SanityImagePaletteSorting>;
  lqip?: Maybe<SortOrder>;
  hasAlpha?: Maybe<SortOrder>;
  isOpaque?: Maybe<SortOrder>;
};

export type GeopointSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  lat?: Maybe<SortOrder>;
  lng?: Maybe<SortOrder>;
  alt?: Maybe<SortOrder>;
};

export type SanityImageDimensionsSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
  aspectRatio?: Maybe<SortOrder>;
};

export type SanityImagePaletteSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  darkMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  vibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  dominant?: Maybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  muted?: Maybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  background?: Maybe<SortOrder>;
  foreground?: Maybe<SortOrder>;
  population?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type SanityAssetSourceDataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  assetId?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
};

export type SanityFileAssetSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  mimeType?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  source?: Maybe<SanityAssetSourceDataSorting>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
};

export type DocumentSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
};

export type BlockOrButtonOrMainImage = Block | Button | MainImage;

export type Block = {
  __typename?: 'Block';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<Span>>>;
  style?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['String']>;
};

export type Span = {
  __typename?: 'Span';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
};

export type File = {
  __typename?: 'File';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Int']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Int']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Int']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Int']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Int']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Int']>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Date']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Date']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Date']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Date']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Date']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Date']>;
};

export type ImageFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityImageAssetFilter>;
  hotspot?: Maybe<SanityImageHotspotFilter>;
  crop?: Maybe<SanityImageCropFilter>;
};

export type FileFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityFileAssetFilter>;
};

export type ImageSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  hotspot?: Maybe<SanityImageHotspotSorting>;
  crop?: Maybe<SanityImageCropSorting>;
};

export type FileSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type BlogPageQueryVariables = Exact<{ [key: string]: never }>;

export type BlogPageQuery = { __typename?: 'RootQuery' } & {
  allPageBlog: Array<
    { __typename?: 'PageBlog' } & Pick<
      PageBlog,
      '_key' | 'title' | 'description' | 'pageHeading' | 'showPosts'
    >
  >;
};

export type ContactPageQueryVariables = Exact<{ [key: string]: never }>;

export type ContactPageQuery = { __typename?: 'RootQuery' } & {
  allPageContact: Array<
    { __typename?: 'PageContact' } & Pick<
      PageContact,
      '_key' | 'title' | 'description' | 'callToActionRaw'
    > & {
        links?: Maybe<
          Array<
            Maybe<
              { __typename?: 'Link' } & Pick<
                Link,
                '_key' | 'text' | 'route'
              > & {
                  linkOptions?: Maybe<
                    { __typename?: 'LinkOptions' } & Pick<
                      LinkOptions,
                      'decorator'
                    >
                  >;
                }
            >
          >
        >;
        contactForm?: Maybe<
          { __typename?: 'ContactForm' } & Pick<ContactForm, 'submit'>
        >;
      }
  >;
};

export type AllPagesQueryVariables = Exact<{ [key: string]: never }>;

export type AllPagesQuery = { __typename?: 'RootQuery' } & {
  allPages: Array<{ __typename?: 'Pages' } & Pick<Pages, 'route'>>;
};

export type AllPostPostQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;

export type AllPostPostQuery = { __typename?: 'RootQuery' } & {
  allPost: Array<
    { __typename?: 'Post' } & Pick<
      Post,
      'title' | 'publishedAt' | 'bodyRaw'
    > & {
        mainImage?: Maybe<
          { __typename?: 'MainImage' } & {
            asset?: Maybe<
              { __typename?: 'SanityImageAsset' } & Pick<
                SanityImageAsset,
                'url'
              >
            >;
          }
        >;
        slug?: Maybe<{ __typename?: 'Slug' } & Pick<Slug, 'current'>>;
      }
  >;
};

export type AllPostPreviewQueryVariables = Exact<{ [key: string]: never }>;

export type AllPostPreviewQuery = { __typename?: 'RootQuery' } & {
  allPost: Array<
    { __typename?: 'Post' } & Pick<
      Post,
      'title' | 'publishedAt' | 'previewRaw'
    > & {
        mainImage?: Maybe<
          { __typename?: 'MainImage' } & {
            asset?: Maybe<
              { __typename?: 'SanityImageAsset' } & Pick<
                SanityImageAsset,
                'url'
              >
            >;
          }
        >;
        slug?: Maybe<{ __typename?: 'Slug' } & Pick<Slug, 'current'>>;
      }
  >;
};

export type AllSlugsQueryVariables = Exact<{ [key: string]: never }>;

export type AllSlugsQuery = { __typename?: 'RootQuery' } & {
  allPost: Array<
    { __typename?: 'Post' } & {
      slug?: Maybe<{ __typename?: 'Slug' } & Pick<Slug, 'current'>>;
    }
  >;
};

export type HomePageQueryVariables = Exact<{ [key: string]: never }>;

export type HomePageQuery = { __typename?: 'RootQuery' } & {
  allPages: Array<
    { __typename?: 'Pages' } & Pick<
      Pages,
      'route' | 'title' | 'description'
    > & {
        sections?: Maybe<
          Array<
            Maybe<
              | ({ __typename?: 'ContactForm' } & Pick<
                  ContactForm,
                  '_key' | '_type' | 'submit'
                >)
              | ({ __typename?: 'Hero' } & Pick<Hero, '_key' | 'heading'> & {
                    heroImage?: Maybe<
                      { __typename?: 'MainImage' } & Pick<MainImage, 'alt'> & {
                          asset?: Maybe<
                            { __typename?: 'SanityImageAsset' } & Pick<
                              SanityImageAsset,
                              'url'
                            >
                          >;
                        }
                    >;
                  })
              | ({ __typename?: 'PageHeading' } & Pick<
                  PageHeading,
                  '_key' | '_type' | 'title'
                >)
            >
          >
        >;
      }
  >;
};

export type PageQueryVariables = Exact<{
  route?: Maybe<Scalars['String']>;
}>;

export type PageQuery = { __typename?: 'RootQuery' } & {
  allPages: Array<
    { __typename?: 'Pages' } & Pick<
      Pages,
      'route' | 'title' | 'description'
    > & {
        sections?: Maybe<
          Array<
            Maybe<
              | ({ __typename?: 'ContactForm' } & Pick<
                  ContactForm,
                  '_key' | '_type' | 'submit'
                >)
              | ({ __typename?: 'Hero' } & Pick<Hero, '_key' | 'heading'> & {
                    heroImage?: Maybe<
                      { __typename?: 'MainImage' } & Pick<MainImage, 'alt'> & {
                          asset?: Maybe<
                            { __typename?: 'SanityImageAsset' } & Pick<
                              SanityImageAsset,
                              'url'
                            >
                          >;
                        }
                    >;
                  })
              | ({ __typename?: 'PageHeading' } & Pick<
                  PageHeading,
                  '_key' | '_type' | 'title'
                >)
            >
          >
        >;
      }
  >;
};

export type SettingsQueryVariables = Exact<{ [key: string]: never }>;

export type SettingsQuery = { __typename?: 'RootQuery' } & {
  allSettings: Array<
    { __typename?: 'Settings' } & {
      navigation?: Maybe<
        { __typename?: 'Navigation' } & {
          navigationLinks?: Maybe<
            Array<
              Maybe<
                { __typename?: 'Links' } & {
                  links?: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'Link' } & Pick<
                          Link,
                          '_key' | 'text' | 'route'
                        > & {
                            linkOptions?: Maybe<
                              { __typename?: 'LinkOptions' } & Pick<
                                LinkOptions,
                                'size' | 'weight' | 'decorator'
                              >
                            >;
                          }
                      >
                    >
                  >;
                }
              >
            >
          >;
          navigationOptions?: Maybe<
            { __typename?: 'NavigationOptions' } & Pick<
              NavigationOptions,
              'alignItems'
            >
          >;
        }
      >;
    }
  >;
};

export const BlogPageDocument = gql`
  query blogPage {
    allPageBlog {
      _key
      title
      description
      pageHeading
      showPosts
    }
  }
`;

/**
 * __useBlogPageQuery__
 *
 * To run a query within a React component, call `useBlogPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogPageQuery(
  baseOptions?: Apollo.QueryHookOptions<BlogPageQuery, BlogPageQueryVariables>,
) {
  return Apollo.useQuery<BlogPageQuery, BlogPageQueryVariables>(
    BlogPageDocument,
    baseOptions,
  );
}
export function useBlogPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlogPageQuery,
    BlogPageQueryVariables
  >,
) {
  return Apollo.useLazyQuery<BlogPageQuery, BlogPageQueryVariables>(
    BlogPageDocument,
    baseOptions,
  );
}
export type BlogPageQueryHookResult = ReturnType<typeof useBlogPageQuery>;
export type BlogPageLazyQueryHookResult = ReturnType<
  typeof useBlogPageLazyQuery
>;
export type BlogPageQueryResult = Apollo.QueryResult<
  BlogPageQuery,
  BlogPageQueryVariables
>;
export const ContactPageDocument = gql`
  query contactPage {
    allPageContact {
      _key
      title
      description
      callToActionRaw
      links {
        _key
        text
        route
        linkOptions {
          decorator
        }
      }
      contactForm {
        submit
      }
    }
  }
`;

/**
 * __useContactPageQuery__
 *
 * To run a query within a React component, call `useContactPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useContactPageQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ContactPageQuery,
    ContactPageQueryVariables
  >,
) {
  return Apollo.useQuery<ContactPageQuery, ContactPageQueryVariables>(
    ContactPageDocument,
    baseOptions,
  );
}
export function useContactPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ContactPageQuery,
    ContactPageQueryVariables
  >,
) {
  return Apollo.useLazyQuery<ContactPageQuery, ContactPageQueryVariables>(
    ContactPageDocument,
    baseOptions,
  );
}
export type ContactPageQueryHookResult = ReturnType<typeof useContactPageQuery>;
export type ContactPageLazyQueryHookResult = ReturnType<
  typeof useContactPageLazyQuery
>;
export type ContactPageQueryResult = Apollo.QueryResult<
  ContactPageQuery,
  ContactPageQueryVariables
>;
export const AllPagesDocument = gql`
  query allPages {
    allPages {
      route
    }
  }
`;

/**
 * __useAllPagesQuery__
 *
 * To run a query within a React component, call `useAllPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPagesQuery(
  baseOptions?: Apollo.QueryHookOptions<AllPagesQuery, AllPagesQueryVariables>,
) {
  return Apollo.useQuery<AllPagesQuery, AllPagesQueryVariables>(
    AllPagesDocument,
    baseOptions,
  );
}
export function useAllPagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllPagesQuery,
    AllPagesQueryVariables
  >,
) {
  return Apollo.useLazyQuery<AllPagesQuery, AllPagesQueryVariables>(
    AllPagesDocument,
    baseOptions,
  );
}
export type AllPagesQueryHookResult = ReturnType<typeof useAllPagesQuery>;
export type AllPagesLazyQueryHookResult = ReturnType<
  typeof useAllPagesLazyQuery
>;
export type AllPagesQueryResult = Apollo.QueryResult<
  AllPagesQuery,
  AllPagesQueryVariables
>;
export const AllPostPostDocument = gql`
  query allPostPost($slug: String) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
      title
      mainImage {
        asset {
          url
        }
      }
      publishedAt
      bodyRaw
      slug {
        current
      }
    }
  }
`;

/**
 * __useAllPostPostQuery__
 *
 * To run a query within a React component, call `useAllPostPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostPostQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useAllPostPostQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllPostPostQuery,
    AllPostPostQueryVariables
  >,
) {
  return Apollo.useQuery<AllPostPostQuery, AllPostPostQueryVariables>(
    AllPostPostDocument,
    baseOptions,
  );
}
export function useAllPostPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllPostPostQuery,
    AllPostPostQueryVariables
  >,
) {
  return Apollo.useLazyQuery<AllPostPostQuery, AllPostPostQueryVariables>(
    AllPostPostDocument,
    baseOptions,
  );
}
export type AllPostPostQueryHookResult = ReturnType<typeof useAllPostPostQuery>;
export type AllPostPostLazyQueryHookResult = ReturnType<
  typeof useAllPostPostLazyQuery
>;
export type AllPostPostQueryResult = Apollo.QueryResult<
  AllPostPostQuery,
  AllPostPostQueryVariables
>;
export const AllPostPreviewDocument = gql`
  query allPostPreview {
    allPost {
      title
      mainImage {
        asset {
          url
        }
      }
      publishedAt
      previewRaw
      slug {
        current
      }
    }
  }
`;

/**
 * __useAllPostPreviewQuery__
 *
 * To run a query within a React component, call `useAllPostPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostPreviewQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPostPreviewQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllPostPreviewQuery,
    AllPostPreviewQueryVariables
  >,
) {
  return Apollo.useQuery<AllPostPreviewQuery, AllPostPreviewQueryVariables>(
    AllPostPreviewDocument,
    baseOptions,
  );
}
export function useAllPostPreviewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllPostPreviewQuery,
    AllPostPreviewQueryVariables
  >,
) {
  return Apollo.useLazyQuery<AllPostPreviewQuery, AllPostPreviewQueryVariables>(
    AllPostPreviewDocument,
    baseOptions,
  );
}
export type AllPostPreviewQueryHookResult = ReturnType<
  typeof useAllPostPreviewQuery
>;
export type AllPostPreviewLazyQueryHookResult = ReturnType<
  typeof useAllPostPreviewLazyQuery
>;
export type AllPostPreviewQueryResult = Apollo.QueryResult<
  AllPostPreviewQuery,
  AllPostPreviewQueryVariables
>;
export const AllSlugsDocument = gql`
  query allSlugs {
    allPost {
      slug {
        current
      }
    }
  }
`;

/**
 * __useAllSlugsQuery__
 *
 * To run a query within a React component, call `useAllSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSlugsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllSlugsQuery, AllSlugsQueryVariables>,
) {
  return Apollo.useQuery<AllSlugsQuery, AllSlugsQueryVariables>(
    AllSlugsDocument,
    baseOptions,
  );
}
export function useAllSlugsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllSlugsQuery,
    AllSlugsQueryVariables
  >,
) {
  return Apollo.useLazyQuery<AllSlugsQuery, AllSlugsQueryVariables>(
    AllSlugsDocument,
    baseOptions,
  );
}
export type AllSlugsQueryHookResult = ReturnType<typeof useAllSlugsQuery>;
export type AllSlugsLazyQueryHookResult = ReturnType<
  typeof useAllSlugsLazyQuery
>;
export type AllSlugsQueryResult = Apollo.QueryResult<
  AllSlugsQuery,
  AllSlugsQueryVariables
>;
export const HomePageDocument = gql`
  query homePage {
    allPages(where: { title: { eq: "Home" } }) {
      route
      title
      description
      sections {
        ... on PageHeading {
          _key
          _type
          title
        }
        ... on ContactForm {
          _key
          _type
          submit
        }
        ... on Hero {
          _key
          heading
          heroImage {
            alt
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

/**
 * __useHomePageQuery__
 *
 * To run a query within a React component, call `useHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomePageQuery(
  baseOptions?: Apollo.QueryHookOptions<HomePageQuery, HomePageQueryVariables>,
) {
  return Apollo.useQuery<HomePageQuery, HomePageQueryVariables>(
    HomePageDocument,
    baseOptions,
  );
}
export function useHomePageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomePageQuery,
    HomePageQueryVariables
  >,
) {
  return Apollo.useLazyQuery<HomePageQuery, HomePageQueryVariables>(
    HomePageDocument,
    baseOptions,
  );
}
export type HomePageQueryHookResult = ReturnType<typeof useHomePageQuery>;
export type HomePageLazyQueryHookResult = ReturnType<
  typeof useHomePageLazyQuery
>;
export type HomePageQueryResult = Apollo.QueryResult<
  HomePageQuery,
  HomePageQueryVariables
>;
export const PageDocument = gql`
  query page($route: String) {
    allPages(where: { route: { eq: $route } }) {
      route
      title
      description
      sections {
        ... on PageHeading {
          _key
          _type
          title
        }
        ... on ContactForm {
          _key
          _type
          submit
        }
        ... on Hero {
          _key
          heading
          heroImage {
            alt
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

/**
 * __usePageQuery__
 *
 * To run a query within a React component, call `usePageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageQuery({
 *   variables: {
 *      route: // value for 'route'
 *   },
 * });
 */
export function usePageQuery(
  baseOptions?: Apollo.QueryHookOptions<PageQuery, PageQueryVariables>,
) {
  return Apollo.useQuery<PageQuery, PageQueryVariables>(
    PageDocument,
    baseOptions,
  );
}
export function usePageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageQuery, PageQueryVariables>,
) {
  return Apollo.useLazyQuery<PageQuery, PageQueryVariables>(
    PageDocument,
    baseOptions,
  );
}
export type PageQueryHookResult = ReturnType<typeof usePageQuery>;
export type PageLazyQueryHookResult = ReturnType<typeof usePageLazyQuery>;
export type PageQueryResult = Apollo.QueryResult<PageQuery, PageQueryVariables>;
export const SettingsDocument = gql`
  query settings {
    allSettings {
      navigation {
        navigationLinks {
          links {
            _key
            text
            route
            linkOptions {
              size
              weight
              decorator
            }
          }
        }
        navigationOptions {
          alignItems
        }
      }
    }
  }
`;

/**
 * __useSettingsQuery__
 *
 * To run a query within a React component, call `useSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSettingsQuery(
  baseOptions?: Apollo.QueryHookOptions<SettingsQuery, SettingsQueryVariables>,
) {
  return Apollo.useQuery<SettingsQuery, SettingsQueryVariables>(
    SettingsDocument,
    baseOptions,
  );
}
export function useSettingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SettingsQuery,
    SettingsQueryVariables
  >,
) {
  return Apollo.useLazyQuery<SettingsQuery, SettingsQueryVariables>(
    SettingsDocument,
    baseOptions,
  );
}
export type SettingsQueryHookResult = ReturnType<typeof useSettingsQuery>;
export type SettingsLazyQueryHookResult = ReturnType<
  typeof useSettingsLazyQuery
>;
export type SettingsQueryResult = Apollo.QueryResult<
  SettingsQuery,
  SettingsQueryVariables
>;
