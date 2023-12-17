import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PostCardComponent } from './post-card.component';
import { PostInterface } from 'src/app/interfaces/post.interface';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  const mockPost: PostInterface = {
    userId: 1,
    id: 1,
    title: 'Sample Title',
    body: 'Sample Body',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCardComponent],
    });

    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;
    component.post = mockPost;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the initial active field and content', () => {
    const fieldElement = fixture.debugElement.query(
      By.css('.post-card__field'),
    ).nativeElement;
    const contentElement = fixture.debugElement.query(
      By.css('.post-card__content'),
    ).nativeElement;

    // check if the initial field is title and with the mocked title value
    expect(fieldElement.textContent.trim()).toBe('TITLE');
    expect(contentElement.textContent.trim()).toBe('Sample Title');
  });

  it('should toggle active field and content on card click', () => {
    const fieldElement = fixture.debugElement.query(
      By.css('.post-card__field'),
    ).nativeElement;
    const contentElement = fixture.debugElement.query(
      By.css('.post-card__content'),
    ).nativeElement;

    // First click
    component.onCardClick();
    fixture.detectChanges();

    // check if the after first click field is id and with the mocked id value
    expect(fieldElement.textContent.trim()).toBe('ID');
    expect(contentElement.textContent.trim()).toBe('1');

    // Second click
    component.onCardClick();
    fixture.detectChanges();

    // check if the after second click field is userId and with the mocked userId value
    expect(fieldElement.textContent.trim()).toBe('USERID');
    expect(contentElement.textContent.trim()).toBe('1');

    // Third click
    component.onCardClick();
    fixture.detectChanges();

    // check if the after third click field is title again and with the mocked title value
    expect(fieldElement.textContent.trim()).toBe('TITLE');
    expect(contentElement.textContent.trim()).toBe('Sample Title');
  });
});
