import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  constructor(private http: HttpClient) {}

  private getStandardOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getWishes() {
    let options: any = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'xml',
      },
    });

    return this.http
      .get('wishes.json', options)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred: network', error.error);
    } else {
      console.error('server returned code: ' + error.status, error.error);
    }

    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  private addWish(wish: WishItem) {
    let options = this.getStandardOptions();

    options.headers = options.headers.set(
      'Authorization',
      'Bearer ' + 'your_token_here'
    );

    return this.http.post('wishes.json', wish, options);
  }
}
