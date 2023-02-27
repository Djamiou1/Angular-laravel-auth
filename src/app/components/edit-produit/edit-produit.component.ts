import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitformService } from 'src/app/produitform/produitform.service';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  title!: string;
  file!: File;
  category!: string;
  price!: any;
  description!: string;
  localisation!: string;
  uploading: boolean = false;
  Router: any;
  user_id: any;

  id!: number;
  produit: any;

  constructor(
    private router: Router,
    private produitformService: ProduitformService,
    private route: ActivatedRoute
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

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit(form: NgForm) {
    this.uploading = true;
    const formData = new FormData();
    formData.append('title', this.produit.title);
    formData.append('category', this.produit.category);
    formData.append('price', this.produit.price);
    formData.append('description', this.produit.description);
    formData.append('localisation', this.produit.localisation);
    formData.append('user_id', this.produit.user_id);
    formData.append('image', this.file, this.file.name);
    this.produitformService.editProduit(this.id, formData).subscribe((response: any) => {
      form.reset();
      this.router.navigate(['/produit/'+this.id]);
    }, (error: any) => {
      console.log('Erreur lors de la mise à jour :', error);
      this.uploading = false;
    });
  }
}
function setValue(title: any): string | Blob {
  throw new Error('Function not implemented.');
}

