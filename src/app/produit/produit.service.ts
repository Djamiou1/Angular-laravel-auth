import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(
    private http: HttpClient
  ) { }

   getProduit() :Observable<any>{
    return this.http.get('http://localhost:8000/api/produit');
       
   }
}