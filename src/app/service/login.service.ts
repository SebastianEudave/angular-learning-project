import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isAuthenticated : boolean;
  public isLoggedIn: Subject<boolean>;

  constructor(private router: Router) {
    this.isLoggedIn = new Subject<boolean>();
    this.isAuthenticated = false;
  }

  signOut(): void {
    this.isAuthenticated = false;
    this.isLoggedIn.next(false);
  }

  login(username: string, password: string):void{
    this.isLoggedIn.next(true);
    this.isAuthenticated = true;
    this.router.navigate(['/home']);
  }

  canActivate(): boolean {
    if(this.isAuthenticated === false){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

export const canActivateFn: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(LoginService).canActivate();
  };

