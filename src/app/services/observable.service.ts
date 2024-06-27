
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ObservableService {

  private headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('authorId', '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d');
  }

  public setHeaders() {
    this.headers = this.headers.append('Content-Type', 'application/json');
  }

  public getUrlServicioGet(servicio: string) {
    return this.getQuery(servicio);
  }

  getQuery(query: string): Observable<any> {
    return this.http.get(query, { headers: this.headers });
  }

  post(servicio: string, obj: any): Observable<any> {
    return this.http.post(servicio, obj, { headers: this.headers }).pipe(
      tap((body) => body),
      catchError(this.handleError<any>('Error al guardar registro'))
    );
  }
  put(servicio: string, obj:any): Observable<any> {
    return this.http.put(servicio, obj, { headers: this.headers }).pipe(
      tap((body) => body),
      catchError(this.handleError<any>('Error al editar registro'))
    );
  }

  delete(url: string) {
    const headers = this.headers;
    return this.http.delete(url, {headers}).pipe(
      tap((body) => body),
      catchError(this.handleError<any>('Error al guardar registro'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return throwError(error);
    };
  }
}