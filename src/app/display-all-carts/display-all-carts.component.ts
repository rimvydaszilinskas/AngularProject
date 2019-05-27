import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../entities/shopping-list';
import { TemporaryStorageService } from '../service/temporary-storage.service';

@Component({
  selector: 'app-display-all-carts',
  templateUrl: './display-all-carts.component.html',
  styleUrls: ['./display-all-carts.component.css']
})
export class DisplayAllCartsComponent implements OnInit {
  shoppingLists: ShoppingList[];
  isLoading: boolean;
  userSearch: string;

  constructor(private data: TemporaryStorageService) { }

  ngOnInit() {
    this.shoppingLists = this.data.shoppingLists;
    console.log(this.shoppingLists)
  }

  handleShoppingListClicked(shoppingList: ShoppingList) : void {
    // Do whatever I want to handle the event.
    console.log(shoppingList);
  }
}
