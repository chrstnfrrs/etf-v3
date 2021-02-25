import { NavigationOptions } from '../graphql/generated';
import { Link } from './app';

export interface HeroSection {
  __typename: string;
  _key: string;
  heading: string;
  heroImage?: {
    asset: {
      url: string;
    };
  };
}

export interface SplitSection {
  __typename: string;
  _key: string;
  heading: string;
}

export interface HomeProps {
  sections?: [HeroSection?, SplitSection?];
  navigationLinks?: [Link];
  navigationOptions?: NavigationOptions;
}

export interface HomeStaticProps {
  props: {
    sections?: [heroSection?: HeroSection];
    navigationLinks?: [Link];
    navigationOptions?: NavigationOptions;
  };
}
