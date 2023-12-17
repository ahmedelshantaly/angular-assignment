import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { PostsListComponent } from './posts-list.component';
import { PostsService } from './../../services/posts.service';
import { PostInterface } from 'src/app/interfaces/post.interface';
import { PostCardComponent } from '../post-card/post-card.component';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;
  let postsService: jasmine.SpyObj<PostsService>;

  beforeEach(waitForAsync(() => {
    const spy = jasmine.createSpyObj('PostsService', ['getPosts']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PostsListComponent, PostCardComponent],
      providers: [{ provide: PostsService, useValue: spy }],
    }).compileComponents();

    postsService = TestBed.inject(PostsService) as jasmine.SpyObj<PostsService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch posts on init', () => {
    const mockPosts: PostInterface[] = [
      { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
      { userId: 2, id: 2, title: 'Post 2', body: 'Body 2' },
    ];

    postsService.getPosts.and.returnValue(of(mockPosts));

    fixture.detectChanges();

    expect(component.posts).toEqual(mockPosts);
  });

  it('should render post cards when posts are available', () => {
    const mockPosts: PostInterface[] = [
      { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
      { userId: 2, id: 2, title: 'Post 2', body: 'Body 2' },
    ];

    postsService.getPosts.and.returnValue(of(mockPosts));

    fixture.detectChanges();

    const postCardElements =
      fixture.nativeElement.querySelectorAll('app-post-card');
    expect(postCardElements.length).toBe(mockPosts.length);
  });

  it('should not render post cards when posts are not available', () => {
    postsService.getPosts.and.returnValue(of([]));

    fixture.detectChanges();

    const postCardElements =
      fixture.nativeElement.querySelectorAll('app-post-card');
    expect(postCardElements.length).toBe(0);
  });
});
