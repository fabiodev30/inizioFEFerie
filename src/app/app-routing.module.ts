import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { HomepageComponentComponent } from './pages/homepage-component/homepage-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponentComponent },
  { path: '**', component: PageNotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
