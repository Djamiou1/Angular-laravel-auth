import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private service: ProfileService
  ) { }

  users: any;
  message!: string
  ngOnInit(): void {
    this.service.getUser().subscribe(
      res =>{
        this.users = res;
      },
      err =>{
        this.message = 'Désolé !!!!!!';
      }
     )
  }
  getUser(){
     
  }
}
