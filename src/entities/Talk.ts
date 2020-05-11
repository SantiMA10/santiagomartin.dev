export interface Talk {
  id: string | number;
  time: string;
  event: {
    name: string;
    url?: string;
  };
  talk: {
    name: string;
    url?: string;
  };
}
