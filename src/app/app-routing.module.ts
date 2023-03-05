import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProduitformComponent } from './components/produitform/produitform.component';
import { ProduitComponent } from './components/produit/produit.component';
import { CommonModule } from '@angular/common';
import { ProduitByIdComponent } from './components/produitbyid/produitbyid.component';
import { EditProduitComponent } from './components/edit-produit/edit-produit.component';


const routes: Routes = [
  { path: '', component: ProduitComponent, pathMatch: 'full'},
  { path: 'profile', component: ProfileComponent},
  { path: 'form', component: ProduitformComponent},
  { path: 'produit/:id', component: ProduitByIdComponent},
  { path: 'edit/:id', component: EditProduitComponent},
  { path: 'signin', component: LoginComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  declarations:[
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ProduitformComponent,
    ProduitComponent,
    ProduitByIdComponent,
    EditProduitComponent
    
  ],
  imports: [RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
