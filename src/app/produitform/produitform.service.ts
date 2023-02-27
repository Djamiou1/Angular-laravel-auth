import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitformService {

  constructor(
    private http: HttpClient
  ) { }

   addProduit(_data: any) :Observable<any>{
    return this.http.post('http://localhost:8000/api/upload', _data)
       
   }
   getAllProduit() :Observable<any>{
    return this.http.get('http://localhost:8000/api/produit');
       
   }
   getProduitById(id: number) :Observable<any>{
    return this.http.get('http://localhost:8000/api/produit/'+id)
       
   }
   editProduit(id: number, data: any) :Observable<any>{
    return this.http.put<any>('http://localhost:8000/api/update/'+id, data)
       
   }
   deleteProduit(id: number) :Observable<any>{
    return this.http.delete('http://localhost:8000/api/produit/'+id)
       
   }
}

