import { IProduct } from "../models/product.interface";
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { TestBed } from '@angular/core/testing';

// import { TestBed } from '@angular/core/testing';
// import { ProductService } from './product.service';

// describe('ProductService', () => {
//   beforeEach(() => TestBed.configureTestingModule({}));

//   it('should be created', () => {
//     const service: ProductService = TestBed.get(ProductService);
//     expect(service).toBeTruthy();
//   });
// });


const input: IProduct[]=[
    {id: 1, name: 'iphone',supplier: 'john',category: 'mobile', price: 100, discounted: 'Yes', discount: 25}
]

const data = Observable.apply(input);

const collectionStub = {
    valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
  }
  
  const angularFiresotreStub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
  }

  describe('Product Serive',()=>{

    let service: ProductService;
    let angularFirestore: AngularFirestore;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers: [
                ProductService,
                { provide: angularFirestore, useValue: angularFiresotreStub}
            ]
        });

        service = TestBed.get(ProductService);
        angularFirestore = TestBed.get(AngularFirestore);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
        expect(angularFiresotreStub.collection).toHaveBeenCalledWith('product');
      });
  })