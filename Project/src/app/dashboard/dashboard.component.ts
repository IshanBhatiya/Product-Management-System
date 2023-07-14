import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiServiceService } from '../Service/api-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  products:any;

  constructor(private service:ApiServiceService , private router:Router){}
  

  ngOnInit(): void {
  this.products = this.service.getAllProductsDetails().subscribe(data => this.products = data);
  }

  updateProduct(id?:number){
    console.log("id = " + id); 
    this.service.getById(id);
    this.router.navigate(['update']);
  }
}

