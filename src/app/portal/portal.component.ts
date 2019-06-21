import { Component, OnInit } from '@angular/core';
import { CartActions } from '../cart.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor(private cartActions: CartActions, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.cartActions.login(false);
    this.router.navigate(['home/login']);  
  }

}
