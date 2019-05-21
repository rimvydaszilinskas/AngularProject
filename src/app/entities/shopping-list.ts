import { Item } from './item';

export class ShoppingList {
    id: string;
    created: Date;
    title: string;
    items: Item[];
    completed: boolean;
}
