import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

import { ApiService } from 'src/app/Services/api.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productType:any="";
  public totalRecords : number=0;
  public page : number=1;
  products:any = []
  public isloading=false;
  constructor(private route:ActivatedRoute,private api:ApiService,private router:Router) { 
  

  }
  ngOnInit(): void {
    
    this.isloading = true;
    this.productType = this.route.snapshot.paramMap.get('productType');
    this.getProducts();
    
  }
  
  getProducts = () =>{
    this.api.getAllProducts(this.productType).subscribe(
      data => {
        this.products = data;
        this.totalRecords = this.products.length;
        this.isloading = false;

      },
      error => {
        console.log(error);
      }
    )

  }

  selectProduct(id:any)
  {
    this.router.navigate(['/products/'+this.productType+'/',id]).then()
  }

}
