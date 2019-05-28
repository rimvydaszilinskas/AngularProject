import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { ShoppingList } from './entities/shopping-list';
import { cartReducer } from './cart.reducer';

export class CartState {
    isLoggedIn: boolean;
    carts: ShoppingList[];
    isLoading: boolean;
}

export class AppState {
    carts?: CartState;
}

export const rootReducer = combineReducers<AppState>({
    router: routerReducer,
    carts: cartReducer
} as any);
