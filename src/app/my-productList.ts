import { Component } from '@angular/core';
import{Product} from './product';
@Component({
  selector: 'myproductList',
  templateUrl: './myproductlist.component.html',
  styleUrls: ['./app.component.css']
})
export class MyProduct {

  p=new Product(1,'banana',2.1,'potasium rich');
  p1=new Product(2,'orange',3.1,'vitamin rich');
   p2=new Product(3,'apple',4.1,' tastes good ');
   p3=new Product(4,'oil',12.1,'not healthy');
   p4=new Product(5,'bread',.1,'carbohydrate rich');
products:Product[]=[this.p,this.p1,this.p2,this.p3,this.p4];

}
