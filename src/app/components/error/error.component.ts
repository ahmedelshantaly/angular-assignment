import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnDestroy {
  errorMessage: string | null = null;
  private subscription: Subscription;

  constructor(private errorService: ErrorService) {
    this.subscription = this.errorService.errorMessage$.subscribe((message) => {
      this.errorMessage = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closeError() {
    this.errorService.clearError();
  }
}
