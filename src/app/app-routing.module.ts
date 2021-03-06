import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PortalComponent } from './portal/portal.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { DisplayCartComponent } from './display-cart/display-cart.component';
import { AuthGuard } from './auth/auth.guard';
import { DisplayAllCartsComponent } from './display-all-carts/display-all-carts.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/login', pathMatch: 'full' }, // if baseUrl => go to login} 

  { path: 'home', component: HomeComponent, children: [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'about', component: AboutComponent},
  ]},
  { path: 'portal', component: PortalComponent, canActivate: [AuthGuard], children: [
    { path: 'new', component: CreateCartComponent },
    { path: 'display-all', component: DisplayAllCartsComponent},
    { path: 'display/:id', component: DisplayCartComponent},
  ]},
  { path: '**', component: PageNotFoundComponent }, // if page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
