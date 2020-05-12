export interface Event {
  id: number;
  time: number;
  event: {
    name: string;
    url: string;
  };
}
