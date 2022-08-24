export interface LayoutProps {
  children: JSX.Element;
}

export interface SingleItem {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating?: {
    count?: number;
    rate?: number;
  };
}

export interface AllItems {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
[];

export interface Paths {
  params: {
    id: string;
  };
}
[];

export type categories = string[];
