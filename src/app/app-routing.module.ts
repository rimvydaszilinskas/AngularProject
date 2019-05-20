import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PortalComponent } from './portal/portal.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/login', pathMatch: 'full' }, // if baseUrl => go to login} 

  { path: 'home', component: HomeComponent, children: [
    { path: 'login', component: LoginComponent},
  ]},
  { path: 'register', component: RegisterComponent},
  { path: 'portal', component: PortalComponent},
  { path: '**', component: PageNotFoundComponent }, // if page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
