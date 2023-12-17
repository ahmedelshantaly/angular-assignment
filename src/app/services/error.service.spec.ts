import { TestBed } from '@angular/core/testing';
import { ErrorService } from './error.service';

describe('ErrorService', () => {
  let service: ErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initially have null error message', (done) => {
    service.errorMessage$.subscribe((errorMessage) => {
      expect(errorMessage).toBeNull();
      done();
    });
  });

  it('should show and update error message', (done) => {
    const testErrorMessage = 'Test error message';

    service.showError(testErrorMessage);

    service.errorMessage$.subscribe((errorMessage) => {
      expect(errorMessage).toEqual(testErrorMessage);
      done();
    });
  });

  it('should clear error message', (done) => {
    const testErrorMessage = 'Test error message';

    // Set an initial error message
    service.showError(testErrorMessage);

    // Clear the error message
    service.clearError();

    service.errorMessage$.subscribe((errorMessage) => {
      expect(errorMessage).toBeNull();
      done();
    });
  });
});
