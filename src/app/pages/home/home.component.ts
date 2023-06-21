import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public data: any;
  public productDetail;

  constructor(public apiService: ApiService, public router: Router) {
    this.getData().then((products) => {
      console.log(products);
    });
  }
  public async getData() {
    this.data = await this.apiService.getAllData();
    return this.data;
  }
  public async getProductDetail(pid) {
    this.apiService.getProduct(pid).then((product) => {
      this.productDetail = product;
      console.log(this.productDetail);
    });
  }
}