import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingList } from '../entities/shopping-list';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input() shoppingListInput: ShoppingList;
  @Output() shoppingListClicked: EventEmitter<ShoppingList> = new EventEmitter<ShoppingList>(); 

  constructor() { }

  ngOnInit() {
    console.log(this.shoppingListInput);
  }

  emitShoppingListClicked() {
    this.shoppingListClicked.emit(this.shoppingListInput);
  }

}
