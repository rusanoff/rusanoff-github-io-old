interface INavigationItem {
  name: string;
  link: string;
}

interface INavigationProps {
  items: INavigationItem[];
}

export {
  INavigationItem,
  INavigationProps,
};
