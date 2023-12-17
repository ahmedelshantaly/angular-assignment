import { Component } from '@angular/core';
import { ErrorService } from './services/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-assignment';

  constructor(private errorService: ErrorService) {}

  ngOnInit() {
    // Clear error message when the component initializes
    this.errorService.clearError();
  }
}
