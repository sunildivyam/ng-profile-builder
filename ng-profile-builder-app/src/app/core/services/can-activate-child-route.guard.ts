import { Injectable } from '@angular/core';
import { CanActivateChild,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         Router} from '@angular/router';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class CanActivateChildRouteGuard implements CanActivateChild {

  constructor(private authService: AuthService,
    private router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    if (this.authService.isUserLoggedIn()){
      return true;
    }
    return new Promise<boolean>((resolve, reject) => {
      this.authService.userLoggedInStatus().subscribe((user) => {
        if (user) {
          resolve(true);
        } else {
          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          resolve(false);
        }
      });
    });
  }
}
