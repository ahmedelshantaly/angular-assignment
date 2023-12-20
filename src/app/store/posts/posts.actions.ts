import { createAction, props } from '@ngrx/store';
import { PostInterface } from 'src/app/interfaces/post.interface';

export const LOAD_POSTS = '[posts page] load posts';
export const LOAD_POSTS_SUCCESS = '[posts page] load posts success';
export const LOAD_POSTS_FAILURE = '[posts page] load posts failure';

export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ posts: PostInterface[] }>(),
);
export const loadPostsFailure = createAction(
  LOAD_POSTS_FAILURE,
  props<{ error: any }>(),
);
