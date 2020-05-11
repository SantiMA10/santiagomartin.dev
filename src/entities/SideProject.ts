type url = string;

export interface SideProject {
  title: {
    text: string;
    url?: url;
  };
  description: string;
  code?: url;
}
