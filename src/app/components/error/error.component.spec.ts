import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ErrorComponent } from './error.component';
import { ErrorService } from 'src/app/services/error.service';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let errorService: ErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorComponent],
      providers: [ErrorService],
    });
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    errorService = TestBed.inject(ErrorService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to error messages from ErrorService', () => {
    const errorMessage = 'Test error message';
    errorService.showError(errorMessage);

    expect(component.errorMessage).toEqual(errorMessage);
  });

  it('should display error container when errorMessage is not null', () => {
    const errorMessage = 'Test error message';
    component.errorMessage = errorMessage;
    fixture.detectChanges();
    const errorContainer =
      fixture.nativeElement.querySelector('.error__container');
    expect(errorContainer).toBeTruthy();
    expect(errorContainer.textContent).toContain(errorMessage);
  });

  it('should not display error container when errorMessage is null', () => {
    component.errorMessage = null;
    fixture.detectChanges();
    const errorContainer =
      fixture.nativeElement.querySelector('.error__container');
    expect(errorContainer).toBeNull();
  });

  it('should clear error message when closeError is called', waitForAsync(() => {
    const errorMessage = 'Test error message';
    component.errorMessage = errorMessage;
    spyOn(errorService, 'clearError').and.callThrough();

    component.closeError();

    fixture.whenStable().then(() => {
      expect(component.errorMessage).toBeNull();
      expect(errorService.clearError).toHaveBeenCalled();
    });
  }));
});
