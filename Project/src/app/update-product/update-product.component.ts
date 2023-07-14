import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ApiServiceService } from '../Service/api-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product:Product = new Product();

  constructor(private router: Router, private service: ApiServiceService) { }

  updateProduct(id?: number) {
   console.log(this.product);
    this.service.updateTheProduct(this.product).subscribe();
    this.router.navigate(['update']);
  }

  getProductById() {
    this.service.getProductById().subscribe(resp => this.product = resp)
  }

  ngOnInit(): void {
    this.getProductById();
  }

}

