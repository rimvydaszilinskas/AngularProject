import { Item } from './item';

export class ShoppingList {
    id: string;
    name: string;
    items?: Item[];
    completed?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
