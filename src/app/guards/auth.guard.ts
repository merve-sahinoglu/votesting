import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { filter, map, Observable, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.getCurrenUser().pipe(
      filter((val)=>val !==null),
      take(1),
      map((isAuthenticated: any) => {
        console.log('isAuthocanticated', isAuthenticated);
        if (isAuthenticated) {     
        return isAuthenticated;
        } else {
          this.router.createUrlTree(['/'])
        }
      })
    );
  }
}
