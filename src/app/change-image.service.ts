import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeImageService {
  //tạo một object hoặc map để lưu url của mỗi sản phẩm
  private imageUrls: Map<string, string> = new Map<string, string>();

  constructor() {
    // Khởi tạo các giá trị mặc định cho các sản phẩm ở đây nếu cần
    this.imageUrls.set('product1', '../assets/images/product1.jpg');
    this.imageUrls.set('product2', '../assets/images/product4.jpg');
    this.imageUrls.set('product3', '../assets/images/product7.jpg');
    this.imageUrls.set('product4', '../assets/images/product10.jpg');
    // Thêm các sản phẩm khác vào đây
  }

  changeImage(productId: string, newImageUrl: string) {
    //set lại giá trị khi thực hiện sự kiện
    this.imageUrls.set(productId, newImageUrl);
  }

  getImageUrl(productId: string) {
    return this.imageUrls.get(productId) || '';
  }
}
