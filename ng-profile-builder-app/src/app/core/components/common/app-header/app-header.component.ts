import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services';

@Component({
  selector: 'pba-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }
  
  public logoutClick(event: any): void {
    event.preventDefault();
    this.authService.logout().then((res: any) => {
      console.log("logged out successfuly", res);
    }, (err) => {
      console.log("Erro Logging out", err);
    });  
  }

  public myProfileClick(event: any): void {
    event.preventDefault();  
  }

  ngOnInit() {
  }
}
