import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/produit/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits:any;

  constructor(
    private service: ProduitService
  ) { }

  ngOnInit(): void {
    this.service.getProduit().subscribe(
      (res: any) =>{
        this.produits = res;
      },
      err =>{
        console.log(err)
      }
     )
  }

}
