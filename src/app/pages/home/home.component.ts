import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public productDetails: any;
  public getProductDetails(product: any){
    console.log(product);
    this.productDetails = product;
  }

  public product = [
    {
      id: 1,
      name: 'Product 1',
      price: '100',
      description: 'This is a wider card with supporting text below as a in to additional content.',
      imgUrl: 'assets/images/home/img01.jpg'
    },
    {
      id: 1,
      name: 'Product 1',
      price: '100',
      description: 'This is a wider card with supporting text below as a in to additional content.',
      imgUrl: 'assets/images/home/img01.jpg'
    },
    {
      id: 1,
      name: 'Product 1',
      price: '100',
      description: 'This is a wider card with supporting text below as a in to additional content.',
      imgUrl: 'assets/images/home/img01.jpg'
    },
    {
      id: 1,
      name: 'Product 1',
      price: '100',
      description: 'This is a wider card with supporting text below as a in to additional content.',
      imgUrl: 'assets/images/home/img01.jpg'
    },
    {
      id: 1,
      name: 'Product 1',
      price: '100',
      description: 'This is a wider card with supporting text below as a in to additional content.',
      imgUrl: 'assets/images/home/img01.jpg'
    }
  ];

  constructor(public apiService: ApiService) {
    this.apiService.getProducts().subscribe((productResponse) => {
      console.log(productResponse);
    });
  }
}