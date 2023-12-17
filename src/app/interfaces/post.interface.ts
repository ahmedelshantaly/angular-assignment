export interface PostInterface {
  body: string;
  id: number;
  title: string;
  userId: number;
  [key: string]: string | number;
}
