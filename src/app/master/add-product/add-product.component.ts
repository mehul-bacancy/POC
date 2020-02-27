import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/models/product.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productObj: IProduct
    = { id: 0, name: '', supplier: '', category: '', price: 0, discounted: 'Yes', discount: 0 };
  isShow: boolean;
  quantity: number = 0;
  productId = 0;
  products: IProduct[];
  suppliers = [];
  categories = [];

  addProductForm: FormGroup = new FormGroup({
    'name': new FormControl(this.productObj['name'], Validators.required),
    'supplier': new FormControl(this.productObj['supplier'], [Validators.required]),
    'category': new FormControl(this.productObj['category'], [Validators.required]),
    'quantity': new FormControl(this.quantity, [Validators.required]),
    'price': new FormControl(this.productObj['price'], Validators.required),
    'discount': new FormControl(this.productObj['discount'], Validators.required),
    'discounted': new FormControl(this.productObj['discounted'], Validators.required),
  });
  constructor(public _ProductService: ProductService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.productId = Number(this.actRoute.snapshot.params['id']) || 0;
    console.log(this.productId)
    if (this.productId) {
      this._ProductService.getAllData().subscribe(data => {
        data.find(p => {
          // console.log('data:::', p);
          if (p.id == this.productId) {
            this.productObj = p;
            // debugger;
            console.log('a', this.productObj)
            this.addProductForm = new FormGroup({
              'name': new FormControl(this.productObj['name'], Validators.required),
              'supplier': new FormControl(this.productObj['supplier'], [Validators.required]),
              'category': new FormControl(this.productObj['category'], [Validators.required]),
              'quantity': new FormControl(this.quantity, [Validators.required]),
              'price': new FormControl(this.productObj['price'], Validators.required),
              'discount': new FormControl(this.productObj['discount'], Validators.required),
              'discounted': new FormControl(this.productObj['discounted'], Validators.required),
            });
          }
        })
      })
    }

    this._ProductService.getAllData().subscribe(data => {
      this.suppliers = this._ProductService.getSuppliersOrCategories(data.map(data => data['supplier']));
      this.categories = this._ProductService.getSuppliersOrCategories(data.map(data => data['category']))
    })

    this.getProducts();
    this.isShow = true;

    // this._ProductService.getAllDatas('-M1-kvU0f8jE6nfuNmZx').on(('value'), (response) => {
    //   console.log('response', response.key);
    //   console.log('response.val()', response.val());
    // })
  }
  getProducts() {
    this._ProductService.getAllData().subscribe(data => {
      this.products = data
      // console.log(this.products)
    })
  }
  onUpdate(id) {
    let pid = this.products.length
    if (this.productId == 0) {
      const data = {
        id: pid+1,
        name: this.addProductForm.controls.name.value,
        supplier: this.addProductForm.controls.supplier.value,
        category: this.addProductForm.controls.category.value,
        price: this.addProductForm.controls.price.value,
        discounted: this.addProductForm.controls.discounted.value,
        discount: this.addProductForm.controls.discount.value
      }
      console.log(data)
      this._ProductService.addProduct(data);
    }
    else {
      const data = {
        id: id,
        name: this.addProductForm.controls.name.value,
        supplier: this.addProductForm.controls.supplier.value,
        category: this.addProductForm.controls.category.value,
        price: this.addProductForm.controls.price.value,
        discounted: this.addProductForm.controls.discounted.value,
        discount: this.addProductForm.controls.discount.value
      }
      
      //  debugger
      this._ProductService.updateProduct(String(id - 1), data);
     
    }
    this.router.navigateByUrl('/master/product')
  }

  isShowDiscount(event) {
    if (event.target.value == 'Yes') {
      this.isShow = true;
    } else {
      this.isShow = false;
    
    }
  }

  isShowModal(){
    this._ProductService.showHidemodal();
  }
}
