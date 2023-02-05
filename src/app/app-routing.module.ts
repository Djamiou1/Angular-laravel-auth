import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProfileComponent, pathMatch: 'full'},
  { path: 'signin', component: LoginComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  declarations:[
    LoginComponent,
    SignupComponent,
    ProfileComponent,
  ],
  imports: [RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
