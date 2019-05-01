import { Component, OnInit } from '@angular/core';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';
import { AuthService } from '../../../services';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'pba-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private returnUrl: string;

  constructor(public authService: AuthService, 
    private router: Router,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe((params: Params) => {
        this.returnUrl = params['returnUrl'] || '/dashboard';
      });
    }
  
  public signInSuccessCb(successData: FirebaseUISignInSuccessWithAuthResult) {
    console.log("Successfully Signed In", successData);
    this.router.navigateByUrl(this.returnUrl);
  }

  public signInErrorCb(errorData: FirebaseUISignInFailure) {
    console.log("Signing In Failed", errorData);
  }

  public logoutClick(event: any): void {
    event.preventDefault();
    this.authService.logout().then((res: any) => {
      console.log("logged out successfuly", res);
    }, (err) => {
      console.log("Erro Logging out", err);
    });  
  }

  ngOnInit() {
    
  }

}
