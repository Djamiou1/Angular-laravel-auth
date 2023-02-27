import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/profile.service';
import { ProduitformService } from 'src/app/produitform/produitform.service';

@Component({
  selector: 'app-produitform',
  templateUrl: './produitform.component.html',
  styleUrls: ['./produitform.component.css']
})
export class ProduitformComponent implements OnInit {
  title!: string;
  file!: File;
  category!: string;
  price!: any;
  description!: string;
  localisation!: string;
  uploading: boolean = false;
  Router: any;

  user_id: any;

  constructor(
    private service: ProfileService,
    private route: Router,
    private produitformService: ProduitformService
    ) {}
//récupération d'Id utilisateur
   
  ngOnInit(): void {
    //récupération d'Id utilisateur
    this.service.getUser().subscribe(
      (res: any) =>{
        this.user_id = res.id;
        console.log(this.user_id);
      },
      err =>{
        console.log(err)
      }
     )
    throw new Error('Method not implemented.');
  }

  

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit(form: NgForm) {
    this.uploading = true;
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('category', this.category);
    formData.append('price', this.price);
    formData.append('description', this.description);
    formData.append('localisation', this.localisation);
    formData.append('user_id', this.user_id);
    formData.append('image', this.file, this.file.name);
    this.produitformService.addProduit(formData).subscribe((response: any) => {
      console.log('Téléchargement réussi !');
      form.reset();
      this.route.navigate(['/']);
    }, (error: any) => {
      console.log('Erreur lors du téléchargement :', error);
      this.uploading = false;
    });
  }
  
}






