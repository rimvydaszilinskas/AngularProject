import { Component, OnInit } from '@angular/core';
import { TemporaryStorageService } from '../service/temporary-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../entities/item';
import { ShoppingList } from '../entities/shopping-list';
import { CartApiService } from '../cart-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartActions } from '../cart.actions';

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.css']
})
export class DisplayCartComponent implements OnInit {
  shoppingList: ShoppingList;
  loading: boolean;
  error: boolean;
  createItem: FormGroup;

  constructor(private apiService: CartApiService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private cartActions: CartActions) { }

  ngOnInit() {
    this.createItem = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(2)]],
      quantity: ['']
    });

    const id: string = this.route.snapshot.paramMap.get('id');

    this.loading = true;

    this.apiService.getShoppingList(id).subscribe(shoppingList => {
      this.shoppingList = shoppingList;
      this.loading = false;
    }, error => {
      this.loading = false;
      this.error = true;
    });
  }

  changeStatus() {
    const cart: ShoppingList = {
      id: this.shoppingList.id,
      name: this.shoppingList.name,
      completed: !this.shoppingList.completed,
      createdAt: this.shoppingList.createdAt,
      updatedAt: this.shoppingList.updatedAt,
      items: this.shoppingList.items
    };

    this.apiService.updateShoppingList(cart).subscribe(list => {
      this.shoppingList = cart;
    }, error => {
      // walkaround
      // appearently when server responds with empty body even though
      // with a status 200 Angular understands that as an error
      // FUCK ANGULAR
      // -- Rim
      if (error.status === 200) {
        this.shoppingList = cart;
      } else {
        this.error = true;
      }
    });
  }

  delete() {
    const result = confirm('Are you sure you want to delete this item?');

    /* The same thing happens here when we send a request to delete, the server
     * returns an empty body with status 200 and bloody Angular understand it as
     * an error...
     * -- Rim
     */
    if (result) {
      this.apiService.deleteShoppingList(this.shoppingList.id).subscribe(response => {
        alert('Cart deleted!');
        this.cartActions.deleteCart(this.shoppingList.id);
        this.router.navigate(['/portal/display-all']);
      }, error => {
        if (error.status === 200) {
          alert('Cart deleted!');
          this.cartActions.deleteCart(this.shoppingList.id);
          this.router.navigate(['/portal/display-all']);
        } else {
          this.error = true;
        }
      });
    }
  }

  addItem() {
    const item = this.createItem.value;

    if (item.name.length !== 0) {
      let itemToPush;

      if (item.quantity === 0 || item.quantity === '') {
        itemToPush = {
          name: item.name,
          quantity: item.quantity,
          cartId: this.shoppingList.id
        };
      } else {
        itemToPush = {
          name: item.name,
          quantity: item.quantity,
          cartId: this.shoppingList.id
        };
      }

      this.apiService.createItem(itemToPush).subscribe(response => {
        this.shoppingList.items.push(response);
      }, error => {
        this.error = true;
      });
    }
  }

}
