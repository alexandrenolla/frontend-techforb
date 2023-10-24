import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  constructor(private router: Router) {}

  menuaberto = false;

  alterarEstadoMenu() {
    this.menuaberto = !this.menuaberto
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login'])
  }
}
