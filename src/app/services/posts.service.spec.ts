import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PostsService } from './posts.service';
import { environment } from 'src/environments/environment.development';
import { Endpoints } from '../enums/endpoints.enum';
import { ErrorService } from './error.service';
import { StoreModule } from '@ngrx/store';
import * as fromPosts from '../store/posts/posts.reducer';

describe('PostsService', () => {
  let postsService: PostsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,StoreModule.forRoot({ posts: fromPosts.postsReducer }),],
      providers: [PostsService, ErrorService],
    });

    postsService = TestBed.inject(PostsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(postsService).toBeTruthy();
  });

  it('should get posts from the API', () => {
    const mockPosts = [
      { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
      { userId: 1, id: 2, title: 'Post 2', body: 'Body 2' },
    ];

    postsService.getPosts().subscribe((posts) => {
      expect(posts).toEqual(mockPosts);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiUrl}${Endpoints.POSTS}`,
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
