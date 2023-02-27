import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProduitformService } from 'src/app/produitform/produitform.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits:any;
  produit:any;
  

  constructor(
    private produitformService: ProduitformService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllProduit();
  }

  getAllProduit(){
    this.produitformService.getAllProduit().subscribe(
      (res: any) =>{
        this.produits = res;
      },
      err =>{
        console.log(err)
      }
     )
  }

}
