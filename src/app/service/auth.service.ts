import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _BASE_URL='http://localhost:1337/';
  token=localStorage.getItem("jwt");
  nameUser=localStorage.getItem("nameUser");
   constructor(private http: HttpClient) { 
  }
  addTokenName(token:string,name:string){
    this.nameUser = name;
    this.token = token;
    localStorage.setItem('jwt', token);
    localStorage.setItem('nameUser', name);

  }
  login(userData:{identifier: string, password: string}):Observable<any>{
    console.log(userData);
    return this.http.post(this._BASE_URL+'auth/local',JSON.stringify(userData),{headers: new HttpHeaders({
      "Content-Type": "application/json"
    })});
  }
  signOut(){
    this.nameUser = '';
    this.token = '';
    localStorage.removeItem("jwt");
    localStorage.removeItem("nameUser");
  }
}
