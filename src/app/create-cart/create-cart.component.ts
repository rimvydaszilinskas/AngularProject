import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ShoppingList } from '../entities/shopping-list';
import { TemporaryStorageService } from '../temporary-storage.service';
import { CartApiService } from '../cart-api.service';

@Component({
  selector: 'app-create-cart',
  templateUrl: './create-cart.component.html',
  styleUrls: ['./create-cart.component.css']
})
export class CreateCartComponent implements OnInit {
  createCart: FormGroup;

  constructor(private fb: FormBuilder,
              private data: TemporaryStorageService,
              private api: CartApiService) {}

  ngOnInit() {
    this.createCart = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      items: this.fb.array([]),
    });
  }

  saveCart() {
    const shoppingCart = this.createCart.value as ShoppingList;

    if (shoppingCart.name.length > 3) {
      this.data.addShoppingList(shoppingCart);
    }

    this.api.getAllShoppingList().subscribe( cart => {
      console.log(cart);
    }, error => {
      console.log(error);
    });
  }

  createNewItem() {
    console.log('trigger this')
    const item = this.fb.group({
      name: [''],
      quantity: [''],
    });

    const items = this.createCart.controls.items as FormArray;

    items.push(item);
  }

}
