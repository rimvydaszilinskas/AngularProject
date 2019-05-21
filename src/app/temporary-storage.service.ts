import { Injectable } from '@angular/core';
import { ShoppingList } from './entities/shopping-list';

@Injectable({
  providedIn: 'root'
})
export class TemporaryStorageService {
  shoppingLists: ShoppingList[];

  constructor() {
    this.shoppingLists = this.getShoppingLists();
  }

  findShoppingList(id: string): ShoppingList {
    return this.shoppingLists.find(shoppingList => shoppingList.id === id);
  }

  getShoppingLists(): ShoppingList[] {
    return [
      {
        id: 'abc',
        title: 'Friday shopping',
        created: new Date(2019, 5, 2),
        completed: false,
        items: [
          {
            name: 'Guiness',
            quantity: 666
          },
          {
            name: 'Kilkenny',
            quantity: 696
          },
        ]
      },
      {
        id: 'bcd',
        title: 'Saturday shopping',
        created: new Date(2019, 5, 2),
        completed: false,
        items: [
          {
            name: 'New brains',
            quantity: 1
          },
          {
            name: 'Some kind of bullshit',
            quantity: 2
          },
        ]
      }
    ];
  }

  addShoppingList(shoppingList: ShoppingList) {
    shoppingList.completed = false;
    shoppingList.created = new Date();
    shoppingList.id = this.generateID(5);

    if (shoppingList.items !== undefined) {

      shoppingList.items.filter(item => item.name.length !== 0);

      this.shoppingLists.push(shoppingList);
    }

  }

  private generateID(length: number): string {
    let result: string = '';
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength: number = characters.length;

    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
}
