import { Pipe, PipeTransform } from '@angular/core';
import { ShoppingList } from './entities/shopping-list';

@Pipe({
  name: 'cartFilter'
})
export class CartFilterPipe implements PipeTransform {

  transform(shoppingList: ShoppingList[], name?: string): ShoppingList[] {
    if (!name) {
      return shoppingList;
    }
    return shoppingList.filter(list => {
      return list.name.toLowerCase().includes(name.toLowerCase());
    });
  }
}
