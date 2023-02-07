import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  message: any = 'Désolé !!!!';

  constructor(
    private service: ProfileService
  ) { }

  
  ngOnInit(): void {
    this.service.getUser().subscribe(
      (res: any) =>{
        this.message = `Hi ${res.name}`;
      },
      err =>{
        console.log(err)
      }
     )
  }
  getUser(){
     
  }
}
