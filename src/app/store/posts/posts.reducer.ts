// posts.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as PostsActions from './posts.actions';
import { initialState } from './posts.state';

export const postsReducer = createReducer(
  initialState,
  on(PostsActions.loadPosts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(PostsActions.loadPostsSuccess, (state, action) => ({
    ...state,
    posts: action.posts,
    loading: false,
    error: null,
  })),
  on(PostsActions.loadPostsFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
);
