import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public data = [
    {
      name: 'Miran',
      id: 1,
    },
    {
      name: 'Raja',
      id: 2,
    },
    {
      name: 'Saifullah',
      id: 3,
    },
    {
      name: 'NoOne',
      id: 4,
    },
  ];
  public data2 = true;

  public color = 'text-primary';

  public constructor(){
    this.fun1();
  }
  public fun1() {
    alert('fu1');
  }
  public fun2(){
    alert('fun2');
  }
}
