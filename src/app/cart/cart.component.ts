import { Component, Input } from '@angular/core';
import { ChangeImageService } from '../change-image.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public changeImageService: ChangeImageService){}

  getImageUrl(productId: string) {
    return this.changeImageService.getImageUrl(productId);
  }

  countProduct: number = 1;
  priceProduct: number = 90;
  
  countRemove(price: number) {
    if(this.countProduct == 0) {
      this.countProduct = 0;
    }else {
      this.countProduct--;
      this.priceProduct = (this.priceProduct - price);
    }
  }
  countAdd(price: number) {
    this.countProduct++;
    this.priceProduct = this.priceProduct + price;
  }

  slectAll() {
    let selectAll = document.getElementById('delete-all');

    if(selectAll) {

    }
    console.log(selectAll);
    
  }
}
