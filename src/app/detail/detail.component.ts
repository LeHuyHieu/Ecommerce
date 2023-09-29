import { Component } from '@angular/core';
import { ChangeImageService } from '../change-image.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(public changeImageService: ChangeImageService){}

  getImageUrl(productId: string) {
    return this.changeImageService.getImageUrl(productId);
  }

  parentArrays: any = [
    { imageName: '../../assets/images/product7.jpg' },
    { imageName: '../../assets/images/product8.jpg' },
    { imageName: '../../assets/images/product9.jpg' },
  ];

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
}
