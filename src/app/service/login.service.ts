import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticated: boolean = false;

  constructor(private router: Router, private tokenStorage: TokenStorageService) { }

  login(username: string, password: string):string{
    this.isAuthenticated = true;
    return "token";
  }

  canActivate(): boolean {
    if(this.tokenStorage.getToken() === null){
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

