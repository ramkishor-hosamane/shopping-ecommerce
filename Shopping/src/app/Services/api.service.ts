import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  baseURL = "https://fakestoreapi.com/products/category/";
  //baseURL = "http://localhost:3000/getProduct";

  httpHeaders = new HttpHeaders({'Content-type':'application/json'});

  getAllProducts(productType:any): Observable<any>{
    return this.http.get(this.baseURL+productType,{headers:this.httpHeaders})
  }
}
