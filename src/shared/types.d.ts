import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

type Widget = {
  id?: string;
  hasBackground?: boolean;
};

type WrapperTagProps = Widget & {
  children: React.ReactNode;
  containerClass?: string;
};

type BackgroundProps = {
  children?: React.ReactNode;
  hasBackground?: boolean;
};

type Header = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  position?: 'center' | 'right' | 'left';
};

type HeadlineProps = {
  header: Header;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
};

type Icon = React.ComponentType<React.ComponentProps<'svg'>>;

type CallToActionType = {
  text?: string;
  href: string;
  icon?: Icon;
  targetBlank?: boolean;

};

type GalleryProps = Widget & {
  header?: Header;
  items?: Array<Item>;
  columns?: 1 | 2 | 3;
  isImageDisplayed?: boolean;W
  image?: Image;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
};

type SongInfoProps = {
  audioSrc: string;
  songTitle: string;
  songHistory: Array<string>;
};

type PlayerProps = {
  audioSrc: string;
  audioType: string;
  localStorageKey: string;
  audioList: Array<string>;
  songTitle?: string;
  songHistory?: Array<string>;
};

type ContentProps  = Widget & {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  image?: Image;
  isReversed?: boolean;
  isAfterContent?: boolean;
  audioSrc?: string;
  audioList?: Array<string>;
};

type SocialMediaProps = Widget & {
  header?: Header;
  items: Array<SocialMediaItemProps>;
  isReversed?: boolean;
  containerClass?: string;
};

type SocialMediaItemProps = {
  embedUrl: string;
  callToAction?: CallToActionType;
  containerClass?: string;
  panelClass?: string;
};

type LinkOrButton = {
  callToAction?: CallToActionType;
  containerClass?: string;
  linkClass?: string;
  iconClass?: string;
  targetBlank?: boolean;
};

type Button = {
  title: string;
  type: 'button' | 'submit' | 'reset';
};

type Input = {
  type: string;
  label?: string;
  value?: string;
  name?: string;
  autocomplete?: string;
  placeholder?: string;
};

type Textarea = {
  cols?: number;
  rows?: number;
  label?: string;
  name: string;
  placeholder?: string;
};

type Checkbox = {
  label: string;
  value: string;
};

type Radio = {
  label: string;
};

type RadioBtn = {
  label?: string;
  radios: Array<Radio>;
};

type SmallForm = {
  icon?: Icon;
  input: Input;
  btn: Button;
};

type FormProps = {
  title?: string;
  description?: string;
  inputs: Array<Input>;
  textarea?: Textarea;
  btn: Button;
  btnPosition?: 'center' | 'right' | 'left';
  containerClass?: string;
};

type Image = {
  link?: string;
  src: string | StaticImageData;
  alt: string;
};

type Item = {
  title?: string | boolean | number;
  description?: string | Array<string>;
  href?: string;
  form?: SmallForm;
  icon?: Icon;
  image?: Image;
  callToAction?: CallToActionType;
};

type ItemGrid = {
  id?: string;
  items?: Array<Item>;
  columns?: number;
  defaultColumns?: number;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  actionClass?: string;
  isImageDisplayed?: boolean;
};

type Timeline = {
  id?: string;
  items?: Array<Item>;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
};

type Link = {
  label?: string;
  href?: string;
  ariaLabel?: string;
  icon?: Icon;
};

type Column = {
  title: string;
  items: Array<Item>;
  callToAction?: CallToActionType;
};

type MenuLink = Link & {
  links?: Array<Link>;
};

type Links = {
  title?: string;
  links?: Array<Link>;
  texts?: Array<string>;
};

type Tab = {
  link?: Link;
  items: Array<Item>;
};

type Dropdown = {
  options: Tab[];
  activeTab: number;
  onActiveTabSelected: Function;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
};

type ToggleMenuProps = {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
};

type WindowSize = {
  width: number;
  height: number;
};

type HeroProps = Widget &  {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  callToAction?: CallToActionType;
  callToAction2?: CallToActionType;
  image?: Image;
  images?: Array<Image>;
};

type CollapseProps = {
  items: Array<Item>;
  classCollapseItem?: string;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
};

type CallToActionProps = Widget & {
  title: string;
  subtitle: string;
  callToAction?: CallToActionType;
  items?: Array<Item>;
};

type StreamProps = Widget & {
  header?: Header;
  items?: Array<Item>;
  columns?: 1 | 2 | 3;
  isImageDisplayed?: boolean;
  image?: Image;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
};

type StepsProps = Widget & {
  header?: Header;
  items: Array<Item>;
  isImageDisplayed?: boolean;
  image?: Image;
  isReversed?: boolean;
};

type TeamProps = Widget & {
  header?: Header;
  teams: Array<Team>;
};

type ComparisonProps = Widget & {
  header?: Header;
  columns: Array<Column>;
};

type StatsProps = Widget & {
  items: Array<Item>;
};

type IconProps = Widget & {
  images: Array<Image>;
};

type ContactProps = Widget & {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  form: FormProps;
};

type FooterProps = {
  title?: string;
  links?: Array<Link>;
  columns: Array<Links>;
  socials: Array<Link>;
  footNote?: string | ReactElement;
  theme?: string;
};

type HeaderProps = {
  links?: Array<MenuLink>;
  actions?: Array<CallToActionType>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
  audioSrc?: string;
};
