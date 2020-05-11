type url = string;

export interface SideProject {
  id: string;
  title: {
    text: string;
    url?: url;
  };
  description: string;
  code?: url;
}
