import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  checkCredenziali,
  logoutWithRouter,
} from 'src/app/core/utils/credenziali/credenziali';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {
    // devo verificare se le credenziali sono presenti
    // se sono presenti allora mostro il logout
    // altrimenti mostro il login
  }

  checkAccesso() {
    return checkCredenziali();
  }

  logout() {
    logoutWithRouter(this.router);
  }

  login() {
    this.router.navigate(['/login']);
  }
}
