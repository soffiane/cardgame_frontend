import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../model/card';
import { Observable, of } from 'rxjs';
import { AppSettings } from 'src/app/settings/app.settings';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.cardUrl = AppSettings.APP_URL;
  }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.cardUrl).pipe(
      catchError(this.handleError<Card[]>('getCards', []))
    );
  }

  /** GET card by id. Will 404 if id not found */
  getCard(id: number): Observable<Card> {
    const url = `${this.cardUrl}/${id}`;
    return this.http.get<Card>(url).pipe(
      catchError(this.handleError<Card>(`getCard id=${id}`))
    );
  }

  /** GET random card  */
  getRandomCard(): Observable<Card> {
    const url = `${this.cardUrl}/random`;
    return this.http.get<Card>(url).pipe(
      catchError(this.handleError<Card>(`getRandomCard`))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
