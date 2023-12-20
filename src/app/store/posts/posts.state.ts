import { PostInterface } from 'src/app/interfaces/post.interface';

export interface PostsState {
  posts: PostInterface[];
  loading: boolean;
  error: any;
}

export const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};
