import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  Books: Book[];
  constructor(
    private http: HttpClient,
    private authService: AuthService) { }
  
  getBoks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.authService._BASE_URL}books`,{headers: new HttpHeaders({
      "Authorization": `Bearer ${this.authService.token}`
    })})
  }
}
