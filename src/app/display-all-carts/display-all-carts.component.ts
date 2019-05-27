import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../entities/shopping-list';
import { TemporaryStorageService } from '../service/temporary-storage.service';
import { CartApiService } from '../cart-api.service';

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

  constructor(private data: TemporaryStorageService, private apiService: CartApiService) {
    this.error = false;
  }

  ngOnInit() {
    this.isLoading = true;
    this.shoppingLists = [];

    this.apiService.getAllShoppingList().subscribe(shoppingLists => {
      this.shoppingLists = shoppingLists;
      this.isLoading = false;
    }, error => {
      this.error = true;
    });
  }

  handleShoppingListClicked(shoppingList: ShoppingList): void {
    // Do whatever I want to handle the event.
    console.log(shoppingList);
  }
}
