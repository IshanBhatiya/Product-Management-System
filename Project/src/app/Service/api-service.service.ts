import { Product } from './../Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = "http://localhost:8080/api/v1/productById";

  updateUrl = "http://localhost:8080/api/v1/update";
  id?:number;
  constructor(private apiCall:HttpClient) { }

  getAllProductsDetails(){
    return this.apiCall.get("http://localhost:8080/api/v1/getAllProducts");
  }

  getById(getId?: number){
    this.id = getId;  
  }

  getProductById() : Observable<Object>{
   return this.apiCall.get<Object>(`${this.baseUrl}/${this.id}`)    
  }

  updateTheProduct(product?:Product):Observable<Object>{
    return this.apiCall.put<Object>(`${this.updateUrl}/${this.id}`, product)
  }
  
}
