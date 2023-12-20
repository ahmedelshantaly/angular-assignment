import { PostInterface } from 'src/app/interfaces/post.interface';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPosts } from '../../store/posts/posts.actions';
import {
  selectPosts,
  selectPostsLoading,
} from '../../store/posts/posts.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts$: Observable<PostInterface[]> = this.store.pipe(select(selectPosts));
  loading$: Observable<boolean> = this.store.pipe(select(selectPostsLoading));
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }
}
