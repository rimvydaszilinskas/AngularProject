import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingList } from './entities/shopping-list';
import { HttpClient } from '@angular/common/http';
import { Item } from './entities/item';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {
  private baseUrl: string = 'https://whispering-brook-61385.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAllShoppingList(): Observable<ShoppingList> {
    return this.http.get<ShoppingList>(this.baseUrl + '/cart/all');
  }

  getShoppingList(id: number): Observable<ShoppingList> {
    return this.http.get<ShoppingList>(this.baseUrl + `/cart/get/${id}`);
  }

  createShoppingList(shoppingList: ShoppingList): Observable<ShoppingList> {
    return this.http.post<ShoppingList>(this.baseUrl + '/cart/create', shoppingList);
  }

  updateShoppingList(shoppingList: ShoppingList): Observable<any> {
    return this.http.post<null>(this.baseUrl + '/cart/update', shoppingList);
  }

  deleteShoppingList(shoppingList: ShoppingList): Observable<any> {
    return this.http.post<null>(this.baseUrl + '/cart/delete', { id: shoppingList.id });
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(this.baseUrl + `/item/get/${id}`);
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.baseUrl + '/item/create', item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/item/delete', id);
  }

  updateItem(item: Item): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/item/update', item);
  }
}
