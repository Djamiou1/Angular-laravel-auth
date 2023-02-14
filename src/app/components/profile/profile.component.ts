import { Component, OnInit } from '@angular/core';
import { emitters } from 'src/app/emitters/emitters';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  message: any = 'You are not logged in';

  constructor(
    private service: ProfileService
  ) { }

  
  ngOnInit(): void {
    this.service.getUser().subscribe(
      (res: any) =>{
        this.message = `Hi ${res.name}`;
        emitters.authEmitter.emit(true);
      },
      err =>{
        console.log(err)
        emitters.authEmitter.emit(false);
      }
     )
  }
  getUser(){
     
  }
}
