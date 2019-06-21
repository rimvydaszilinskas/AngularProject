import { CartState } from './store';
import { CartActions } from './cart.actions';
import { tassign } from 'tassign';

const INITIAL_STATE: CartState = {
    isLoggedIn: false,
    carts: [],
    isLoading: false
};

export function cartReducer(state: CartState = INITIAL_STATE, action: any) {
    switch (action.type) {
        case CartActions.GET_CARTS_LOADING:
            return tassign(state, { isLoading: true });
        case CartActions.GET_CARTS_SUCCESS:
            return tassign(state, { isLoading: false, carts: action.payload });
        case CartActions.GET_CARTS_FAILED:
            return tassign(state, { isLoading: false});
        case CartActions.CREATE_CART:
            return tassign(state, { carts: [...state.carts, action.payload]});
        case CartActions.DELETE_CART:
            const filteredCarts = state.carts.filter(element => element.id !== action.payload);
            console.log(filteredCarts)
            return tassign(state, { carts: filteredCarts });
        default:
            return state;
    }
}