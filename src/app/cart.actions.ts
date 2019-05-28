import { CartApiService } from './cart-api.service';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';
import { ShoppingList } from './entities/shopping-list';

@Injectable({ providedIn: 'root'})
export class CartActions {
    static LOG_IN = 'LOG_IN';
    static CREATE_CART = 'CREATE_CART';
    static UPDATE_CART = 'UPDATE_CART';
    static DELETE_CART = 'DELETE_CART';

    static GET_CARTS_LOADING = 'GET_CARTS_LOADING';
    static GET_CARTS_SUCCESS = 'GET_CARTS_SUCCESS';
    static GET_CARTS_FAILED = 'GET_CARTS_FAILED';

    constructor(
        private ngRedux: NgRedux<AppState>,
        private api: CartApiService
    ) {}

    getCarts(): void {
        this.ngRedux.dispatch({ type: CartActions.GET_CARTS_LOADING});

        this.api.getAllShoppingList().subscribe( carts => {
            console.log(carts);
            this.ngRedux.dispatch({
                type: CartActions.GET_CARTS_SUCCESS,
                payload: carts
            });
        }, error => {
            this.ngRedux.dispatch({
                type: CartActions.GET_CARTS_FAILED,
                payload: error
            });
        });
    }

    createCart(cart: ShoppingList) {
        this.ngRedux.dispatch({
            type: CartActions.CREATE_CART,
            payload: cart
        });
    }

    deleteCart(id: string) {
        this.ngRedux.dispatch({
            type: CartActions.DELETE_CART,
            payload: id
        });
    }
}