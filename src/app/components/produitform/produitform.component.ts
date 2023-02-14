import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/profile.service';

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
  router: any;

  user_id: any;

  constructor(
    private http: HttpClient,
    private service: ProfileService
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

  onSubmit(uploadForm: any) {
    this.uploading = true;
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('category', this.category);
    formData.append('price', this.price);
    formData.append('description', this.description);
    formData.append('localisation', this.title);
    formData.append('user_id', '1');
    formData.append('image', this.file, this.file.name);
    this.http.post('http://localhost:8000/api/upload', formData).subscribe((response: any) => {
      console.log('Téléchargement réussi !');
      this.uploading = false;
      uploadForm.reset();
      this.router.navigate(['./']);
    }, (error: any) => {
      console.log('Erreur lors du téléchargement :', error);
      this.uploading = false;
    });
  }
  
}






