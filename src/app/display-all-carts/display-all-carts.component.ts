import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../entities/shopping-list';
import { TemporaryStorageService } from '../service/temporary-storage.service';
import { CartApiService } from '../cart-api.service';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { CartActions } from '../cart.actions';

@Component({
  selector: 'app-display-all-carts',
  templateUrl: './display-all-carts.component.html',
  styleUrls: ['./display-all-carts.component.css']
})
export class DisplayAllCartsComponent implements OnInit {
  shoppingLists: ShoppingList[];
  isLoading: boolean;
  userSearch: string;
  error: boolean;

  constructor(private apiService: CartApiService,
              private ngRedux: NgRedux<AppState>,
              private cartActions: CartActions) {
    this.error = false;
  }

  ngOnInit() {
    // this.isLoading = true;
    // this.shoppingLists = [];

    // this.apiService.getAllShoppingList().subscribe(shoppingLists => {
    //   this.shoppingLists = shoppingLists;
    //   this.isLoading = false;
    // }, error => {
    //   this.error = true;
    // });

    this.ngRedux.select(state => state.carts).subscribe(result => {
      this.shoppingLists = result.carts;
      this.isLoading = result.isLoading;
    });

    this.cartActions.getCarts();
  }

  handleShoppingListClicked(shoppingList: ShoppingList): void {
    // Do whatever I want to handle the event.
    console.log(shoppingList);
  }
}
