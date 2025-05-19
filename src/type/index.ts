export type CardSize = 'small' | 'medium' | 'large';

export interface CategoryType {
  id: number;
  icon: string;
  text: string;
  size: CardSize;
  route: string;
}

export type TimeStampEntry = {
  category: string;
  timeStamp: string;
};

export interface Track {
  storyId: number;
  title: string;
  category: 'FAIRY_TALE' | 'LETTER';
  created_at: string;
  storyLength: string;
}

export interface CurrentPlay {
  textTitle: string;
  category: 'FAIRY_TALE' | 'LETTER';
  userVoiceUrl: string;
  voiceFileLength: string;
}

export interface Archive {
  storyId: number;
  title: string;
  category: 'FAIRY_TALE' | 'LETTER';
  storyLength: string;
  created_at: string;
}
