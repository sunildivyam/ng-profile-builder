import { Component } from '@angular/core';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';
import { AuthService } from '../../../services';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'pba-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private returnUrl: string;

  constructor(public authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
      this.route.queryParams.subscribe((params: Params) => {
        this.returnUrl = params.returnUrl || '/dashboard';
      });

      this.authService.loginStateChange().subscribe((user) => {
        if (user) {
          this.router.navigateByUrl(this.returnUrl);
        } else {
          this.router.navigateByUrl('/login');
        }
      });
    }

  public signInSuccessCb(successData: FirebaseUISignInSuccessWithAuthResult): void {
     // console.log("Successfully Signed In", successData);
    // this.router.navigateByUrl(this.returnUrl);
  }

  public signInErrorCb(errorData: FirebaseUISignInFailure): void {
    // console.log("Signing In Failed", errorData);
  }

  public logoutClick(event: any): void {
    event.preventDefault();
    this.authService.logout().then((res: any) => {
      // console.log("logged out successfuly", res);
    }, (err) => {
      // console.log("Erro Logging out", err);
    });
  }
}
