import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(
    private http: HttpClient
  ) { }

  login(_data: any): Observable<any>{
     return this.http.post('http://localhost:3000/signin', _data);
  }
}
