import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ShoppingList } from '../entities/shopping-list';
import { TemporaryStorageService } from '../service/temporary-storage.service';
import { CartApiService } from '../cart-api.service';
import { Item } from '../entities/item';
import { Router } from '@angular/router';
import { CartActions } from '../cart.actions';

@Component({
  selector: 'app-create-cart',
  templateUrl: './create-cart.component.html',
  styleUrls: ['./create-cart.component.css']
})
export class CreateCartComponent implements OnInit {
  createCart: FormGroup;

  constructor(private fb: FormBuilder,
              private api: CartApiService,
              private router: Router,
              private cartActions: CartActions ) {}

  ngOnInit() {
    this.createCart = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      items: this.fb.array([]),
    });
  }

  saveCart() {
    const shoppingCart = this.createCart.value as ShoppingList;

    console.log(shoppingCart);

    console.log(shoppingCart.items);
    if (shoppingCart.name.length > 3) {
      // this.data.addShoppingList(shoppingCart);

      // send the data to the server
      this.api.createShoppingList(shoppingCart).subscribe( cart => {

        if (shoppingCart.items.length !== 0) {

          shoppingCart.items.forEach(item => {
            item.cartId = cart.id;
          });

          this.api.createManyItems(shoppingCart.items).subscribe( itemsFromApi => {
            cart.items = itemsFromApi;

            this.cartActions.createCart(cart);
            this.router.navigate([`/portal/display/${cart.id}`]);
          }, error => {
            console.log(error);
          });
        }
      }, error => {
        console.log(error);
      });
    }

    // this.api.getAllShoppingList().subscribe( cart => {
    //   console.log(cart);
    // }, error => {
    //   console.log(error);
    // });
  }

  createNewItem() {
    const item = this.fb.group({
      name: [''],
      quantity: [''],
    });

    const items = this.createCart.controls.items as FormArray;

    items.push(item);

  }

}
