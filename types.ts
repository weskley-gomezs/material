
export enum SlideType {
  COVER = 'COVER',
  PROBLEM = 'PROBLEM',
  ERROR = 'ERROR',
  VISION = 'VISION',
  CLOSING = 'CLOSING'
}

export interface SlideData {
  id: SlideType;
  title?: string;
  subtitle?: string;
  content?: string[];
  footer?: string;
  highlight?: string;
}
