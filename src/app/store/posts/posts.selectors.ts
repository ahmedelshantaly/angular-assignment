import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

export const selectPostsFeature = createFeatureSelector<PostsState>('posts');

export const selectPosts = createSelector(
  selectPostsFeature,
  (state) => state.posts,
);
export const selectPostsLoading = createSelector(
  selectPostsFeature,
  (state) => state.loading,
);
export const selectPostsError = createSelector(
  selectPostsFeature,
  (state) => state.error,
);
