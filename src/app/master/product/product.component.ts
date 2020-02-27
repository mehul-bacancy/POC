import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/models/product.interface';
import { SearchFilterPipe } from 'src/app/pipes/search-filter.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  products: IProduct[];
  search: string = '';
  discount:string="Yes";
  page = 1;
  pageSize = 10;
  suppliers=[];
  categories=[];
  collectionSize:number = 100;
 
  constructor(public _ProductService: ProductService, public filterPipe: SearchFilterPipe, private router: Router) { }

  ngOnInit() {
    this.getProducts();
    this._ProductService.getAllData().subscribe(data=>{
      this.suppliers=this._ProductService.getSuppliersOrCategories(data.map(data=>data['supplier']));
      this.categories=this._ProductService.getSuppliersOrCategories(data.map(data=>data['category']))
    }) 
  }

  getProducts() {
    let start = ((this.page - 1) * 10) + 1;
    let end = this.page * 10
    this._ProductService.getData(start, end).subscribe(data => {
      this.products = data
     
    })
  }

  onPageClick(){
    this.getProducts();
    console.log(this.products)

  }
 
  filterProduct(){
   
  }
  isShowModal(){
    this._ProductService.showHidemodal();
  }
}
