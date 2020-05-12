export interface Talk {
  id: string | number;
  time: number;
  event: {
    name: string;
    url?: string;
  };
  talk: {
    name: string;
    url?: string;
  };
}
