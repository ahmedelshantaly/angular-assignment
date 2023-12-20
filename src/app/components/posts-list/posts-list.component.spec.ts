import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { PostsListComponent } from './posts-list.component';
import { PostInterface } from 'src/app/interfaces/post.interface';
import { loadPosts } from '../../store/posts/posts.actions';
import {
  selectPosts,
  selectPostsLoading,
} from '../../store/posts/posts.selectors';
import { PostCardComponent } from '../post-card/post-card.component';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;
  let store: MockStore;
  const initialState = {
    // Define your initial state here if needed
    posts: {
      entities: {},
      ids: [],
      loading: false,
      error: null,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsListComponent, PostCardComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadPosts action on ngOnInit', () => {
    spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(loadPosts());
  });

  it('should select posts from the store', () => {
    const mockPosts: PostInterface[] = [
      { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
      { userId: 2, id: 2, title: 'Post 2', body: 'Body 2' },
    ];
    const postsSelector = store.overrideSelector(selectPosts, mockPosts);

    component.posts$.subscribe((posts) => {
      expect(posts).toEqual(mockPosts);
    });

    store.refreshState();
  });

  it('should select loading state from the store', () => {
    const loadingSelector = store.overrideSelector(selectPostsLoading, true);

    component.loading$.subscribe((loading) => {
      expect(loading).toBe(true);
    });

    store.refreshState();
  });
});
