import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProduitformService } from 'src/app/produitform/produitform.service';

@Component({
  selector: 'app-produit-by-id',
  templateUrl: './produitbyid.component.html',
  styleUrls: ['./produitbyid.component.css']
})
export class ProduitByIdComponent implements OnInit {
  produit: any;
  id!: number;
  constructor(
    private produitformService: ProduitformService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProduitById()
  }

  getProduitById(){
    this.produitformService.getProduitById(this.id).subscribe(
     res => { 
      this.produit = res,
      console.log(this.produit)
    },
     err => console.log(err)
    )
  }
  deleteProduit(id: number){
    this.produitformService.deleteProduit(this.id).subscribe(
     res => { 
      this.router.navigate(['']);
     },
     err => console.log(err)
    )
  }
}
