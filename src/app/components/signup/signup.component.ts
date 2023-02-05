import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from "./../../signup/signup.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: SignupService
  ) { }

  ngOnInit(): void {
     this.signupForm = this.fb.group({
       name:['', Validators.required],
       email:['', Validators.required],
       password:['', Validators.required]
     });
  }
  login(_data: any): void{
    this.service.login(this.signupForm.getRawValue())
             .subscribe((res: any) => {
              console.log(res);
             });
    
    
     }

}
