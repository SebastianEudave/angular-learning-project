import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginObservable : Observable<boolean>;
  private loginSubject: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    this.loginSubject = new BehaviorSubject<boolean>(false);
    this.loginObservable = this.loginSubject.asObservable();
  }

  signOut(): void {
    this.loginSubject.next(false);
  }

  login(username: string, password: string):void{
    this.loginSubject.next(true);
    this.router.navigate(['/home']);
  }

  canActivate(): boolean {
    if(this.loginSubject.getValue() === false){
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

