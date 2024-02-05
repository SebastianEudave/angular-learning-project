import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { TokenStorageService } from './service/token-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, RouterModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'angular-learning-project';
  isAuthenticated: boolean;

  constructor(private tokenStorage: TokenStorageService, private router: Router){}

  ngOnInit(): void {
    this.isAuthenticated = !!this.tokenStorage.getToken();
  }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
    this.router.navigate(['/login']);
  }
}
