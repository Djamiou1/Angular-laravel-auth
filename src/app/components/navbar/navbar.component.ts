import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authenticated = false; 

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    )
  }

  logout():void{
    this.http.post('http://localhost:8000/api/logout', {}, { withCredentials: true })
          .subscribe(() => this.authenticated = false);
  }

}
