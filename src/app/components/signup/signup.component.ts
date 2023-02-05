import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: HttpClient
  ) { }

  ngOnInit(): void {
     this.form = this.fb.group({
       name:['', Validators.required],
       email:['', Validators.required],
       password:['', Validators.required]
     });
  }
  login(): void{
    const val = this.form.value;
    console.log(val);
    // if (val.email && val.password) {
    //     this.authService.login(val.email, val.password)
    //         .subscribe(
    //             () => {
    //                 console.log("User is logged in");
                    
    //             }
    //         );
     }

}
