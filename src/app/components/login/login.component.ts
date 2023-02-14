import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { SigninService } from 'src/app/signin/signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    // private service: SigninService,
    private router: Router
  ) { }

  signinForm!: FormGroup

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });
  }
    login(_data:any): void{
        this.http.post('http://localhost:8000/api/login',
                       this.signinForm.getRawValue(), {
                        withCredentials: true
                      })
                      .subscribe((res: any) => {
                      this.router.navigate(['./']);
                      this.signinForm.reset();

        });
   
  }

}
