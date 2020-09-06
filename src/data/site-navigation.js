import { nanoid } from 'nanoid';

import {
  HomeIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GitHubIcon,
  DribbbleIcon,
} from '../components/vectors';

export const mainNavigation = [
  {
    id: nanoid(),
    label: 'Home',
    slug: '/',
    icon: HomeIcon,
  },
];

export const footerNavigation = [{ id: nanoid(), label: 'Home', slug: '/' }];

export const socialLinks = [
  {
    id: nanoid(),
    label: 'Facebook',
    url: 'https://www.facebook.com',
    icon: FacebookIcon,
  },
  {
    id: nanoid(),
    label: 'Instagram',
    url: 'https://www.instagram.com',
    icon: InstagramIcon,
  },
  {
    id: nanoid(),
    label: 'Twitter',
    url: 'https://www.twitter.com',
    icon: TwitterIcon,
  },
  {
    id: nanoid(),
    label: 'GitHub',
    url: 'https://www.github.com',
    icon: GitHubIcon,
  },
  {
    id: nanoid(),
    label: 'Dribbble',
    url: 'https://www.dribbble.com',
    icon: DribbbleIcon,
  },
];
