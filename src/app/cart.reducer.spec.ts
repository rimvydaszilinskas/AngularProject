import { CartActions } from "./cart.actions";
import { cartReducer } from './cart.reducer';
import { CartState } from './store';

var deepFreeze = require('deep-freeze');

describe('cart reducer tests', () => {
    it('should create new', () => {
        let startState = { carts: [] } as CartState;

        deepFreeze(startState);

        let actionObject = {
            type: CartActions.CREATE_CART,
            payload: {
                id: 'ojasnjuafjisn',
                name: 'Dragoste Din Tei Muzik',
                completed: false
            }
        };

        let newStateObj = cartReducer(startState, actionObject);

        expect(newStateObj.carts.length).toBe(1);
    });

    it('should delete a cart', () => {
        let startState = { carts: [
                {
                    id: 'aaa',
                    name: 'bullcrap',
                    completed: true
                },
                {
                    id: 'bbb',
                    name: 'bullcrap',
                    completed: true
                }
            ]
        } as CartState;

        deepFreeze(startState);

        let actionObject = {
            type: CartActions.DELETE_CART,
            payload: 'aaa'
        }

        let newStateObj = cartReducer(startState, actionObject);

        expect(newStateObj.carts.length).toBe(1);
    });
});