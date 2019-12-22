import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../model/card';
import { Observable, of } from 'rxjs';
import { AppSettings } from 'src/app/settings/app.settings';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';

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

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.cardUrl = AppSettings.APP_URL;
  }

  public getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.cardUrl).pipe(tap(_ => this.log('fetched cards')),
      catchError(this.handleError<Card[]>('getCards', []))
    );
  }

  /** GET card by id. Will 404 if id not found */
  getCard(id: number): Observable<Card> {
    const url = `${this.cardUrl}/${id}`;
    return this.http.get<Card>(url).pipe(
      tap(_ => this.log(`fetched card id=${id}`)),
      catchError(this.handleError<Card>(`getCard id=${id}`))
    );
  }

  /** GET random card  */
  getRandomCard(): Observable<Card> {
    const url = `${this.cardUrl}/random`;
    return this.http.get<Card>(url).pipe(
      tap(_ => this.log(`fetched random card`)),
      catchError(this.handleError<Card>(`getRandomCard`))
    );
  }
/*
  public addCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.cardUrl, card, this.httpOptions).pipe(
      tap((newCard: Card) => this.log(`added card w/ id=${newCard.id}`)),
      catchError(this.handleError<Hero>('addCard'))
    );
  }

  public deleteCard(card: Card) {
    return this.http.delete<Card>(this.cardUrl + '/' + card.id);
  }

  public deleteAllCards() {
    return this.http.delete<Card>(this.cardUrl);
  }

  public getRandomCard(): Observable<Card> {
    return this.http.get<Card>(this.cardUrl + '/random');
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

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CardService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CardService: ${message}`);
  }
}
