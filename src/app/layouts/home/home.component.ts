import { Component } from '@angular/core';
import { ChangeImageService } from '../../change-image.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public changeImageService: ChangeImageService){}

  parentArrays: any = [
    { imageName: '../assets/images/logo_partner.jpg' },
    { imageName: '../assets/images/logo_partner2.jpg' },
    { imageName: '../assets/images/logo_partner3.jpg' },
    { imageName: '../assets/images/logo_partner.jpg' },
    { imageName: '../assets/images/logo_partner2.jpg' },
    { imageName: '../assets/images/logo_partner3.jpg' },
    { imageName: '../assets/images/logo_partner.jpg' },
  ];

  policyOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 4
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

  testimoniaSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
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
    nav: true
  }

  testimoniaSliderChild: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
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

  bannerSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
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
    nav: true
  }

  getImageUrl(productId: string) {
    return this.changeImageService.getImageUrl(productId);
  }


  days:any = 194;
  hours:number = 22;
  mins:number = 14;
  serc:number = 4;

  x = setInterval(()=>{
    var futureDate = new Date('Oct 30, 2023 15:34:24');
    var today = new Date();
    var distance = futureDate.getTime() - today.getTime();
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.serc = Math.floor((distance % (1000 * 60)) / (1000));

    if(distance < 0) {
      clearInterval(this.x);
      this.days = "Offerr Is Expired";
    }
  }, 1000)

}
