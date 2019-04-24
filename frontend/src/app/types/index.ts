interface INavigationItem {
  name: string;
  link: string;
}

interface INavigationProps {
  items: INavigationItem[];
}

interface INavBurgerItemProps {
  open: boolean;
}

interface ILanguageProps {
  lang: string;
}

export {
  INavigationItem,
  INavigationProps,
  INavBurgerItemProps,
  ILanguageProps,
};
