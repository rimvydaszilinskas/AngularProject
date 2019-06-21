import { CartFilterPipe } from './cart-filter.pipe';
import { ShoppingList } from './entities/shopping-list';

describe('CartFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CartFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return empty array', () => {
    let shoppingList: ShoppingList[] = [
      {
        id: 'aaa',
        name: 'test'
      },
      {
        id: 'hbbausiddb',
        name: 'whatever'
      }
    ];

    const pipe = new CartFilterPipe();

    let result: ShoppingList[] = pipe.transform(shoppingList, 'blah');

    expect(result.length).toBe(0);
  });
});
