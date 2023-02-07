import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

   login(_data: any) :Observable<any>{
    return this.http.post('http://localhost:8000/api/register', _data)
       
   }

  
}
