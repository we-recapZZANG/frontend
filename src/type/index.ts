export type Track = {
  title: string;
  date: string;
  duration: string;
  isActive: boolean;
};

export type CardSize = 'small' | 'medium' | 'large';

export interface CategoryType {
  id: number;
  icon: string;
  text: string;
  size: CardSize;
  route: string;
}

export type AudioBook = {
  storyId: number;
  title: string;
  category: string;
  storyLength: string;
  content: string;
  createdAt: string;
};
