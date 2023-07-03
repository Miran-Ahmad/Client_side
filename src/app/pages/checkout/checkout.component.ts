import { Component } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  public productId;
  public productData;
  public products: any;
  myForm: FormGroup;

  public total_Price: any;
  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    author: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    price: new FormControl(null, [Validators.required]),
  });


  
  constructor(
    public apiService: ApiService,
    public route: ActivatedRoute,
    public router: Router,
    public formBuilder: FormBuilder
  ) {
    let getProduct = JSON.parse(localStorage.getItem('cartProducts'));
    console.log(getProduct);
    this.products = getProduct;
  }

  public get name(): AbstractControl {
    return this.form.controls['name'];
  }
  public get author(): AbstractControl {
    return this.form.controls['author'];
  }
  public get description(): AbstractControl {
    return this.form.controls['description'];
  }
  public get price(): AbstractControl {
    return this.form.controls['price'];
  }

  totalPrice() {
    let total = 0;
    for (let data of this.products) {
      total += data.price;
    }
    return total;
  }
}
