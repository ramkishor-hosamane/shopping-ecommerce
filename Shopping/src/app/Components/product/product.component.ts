import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private api:ApiService) { }
  productType:any;
  products:any;
  product:any;
  productId:any;
  ngOnInit(): void {
    this.productType = this.route.snapshot.paramMap.get('productType');
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productId=parseInt(this.productId)
    console.log()
    this.getProducts();
    
  }
  
  getProducts = () =>{
    this.api.getAllProducts(this.productType).subscribe(
      data => {
        this.products = data;
        this.product=  this.filter(this.products);

      },
      error => {
        console.log(error);
      }
    )

  }
  getProduct(product:any,id:any):boolean{
    
    return product.id == this.productId ;
  } 


  filter(array:Array<object>) {
    var result = [];
    for(var i = 0, l = array.length; i < l; i++) {
        if(this.getProduct(array[i],this.productId)) {  // here callback is called with the current element
            return array[i];
        }
    }
    return {};
}


}
