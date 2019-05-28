import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatFormField,
  MatToolbarModule,
  MatButtonModule,
  MatSnackBar,
  MatSnackBarModule,
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PortalComponent } from './portal/portal.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { DisplayCartComponent } from './display-cart/display-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayAllCartsComponent } from './display-all-carts/display-all-carts.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CartFilterPipe } from './cart-filter.pipe';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { AppState, rootReducer } from './store';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PortalComponent,
    HomeComponent,
    PageNotFoundComponent,
    CreateCartComponent,
    DisplayCartComponent,
    DisplayAllCartsComponent,
    AboutComponent,
    ContactComponent,
    ShoppingListComponent,
    CartFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>,
              private devTool: DevToolsExtension,
              private ngReduxRouter: NgReduxRouter) {
                // this.ngRedux.configureStore()
                this.ngRedux.configureStore(rootReducer, {}, []);
                this.ngReduxRouter.initialize();
              }
}
