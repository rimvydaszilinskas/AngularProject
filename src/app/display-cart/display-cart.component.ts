import { Component, OnInit } from '@angular/core';
import { TemporaryStorageService } from '../temporary-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../entities/item';
import { ShoppingList } from '../entities/shopping-list';

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.css']
})
export class DisplayCartComponent implements OnInit {
  shoppingList: ShoppingList;

  constructor(private tempData: TemporaryStorageService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.shoppingList = this.tempData.findShoppingList(id);

    console.log(this.shoppingList);
  }

}
