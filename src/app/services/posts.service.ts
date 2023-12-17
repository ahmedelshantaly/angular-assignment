import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Endpoints } from '../enums/endpoints.enum';
import { PostInterface } from '../interfaces/post.interface';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) {}

  getPosts(): Observable<PostInterface[]> {
    const url = `${environment.apiUrl}${Endpoints.POSTS}`;

    return this.http
      .get<PostInterface[]>(url)
      .pipe(catchError(this.handleError.bind(this)));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred
      console.error('An error occurred:', error.error);
    } else {
      // The backend error
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error,
      );
    }
    this.errorService.showError('An error occurred. Please try again later.');

    return throwError(
      () => new Error('Something bad happened; please try again later.'),
    );
  }
}
