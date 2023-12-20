import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadPosts, loadPostsSuccess, loadPostsFailure } from './posts.actions';
import { PostsService } from './../../services/posts.service';

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    private postsService: PostsService,
  ) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      mergeMap(() =>
        this.postsService.getPosts().pipe(
          map((posts) => loadPostsSuccess({ posts })),
          catchError((error) => of(loadPostsFailure({ error }))),
        ),
      ),
    ),
  );
}
