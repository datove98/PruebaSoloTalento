import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  dataCarro:any = [];
  productlist = new BehaviorSubject<any>([])
  constructor(private http: HttpClient) { }

  getProductData(){
    return this.productlist.asObservable()
  }

  setProduct(articulo:any){
    this.dataCarro.push(...articulo);
    this.productlist.next(articulo);
  }

  addToCart(articulo: any){
    this.dataCarro.push(articulo);
    this.productlist.next(this.dataCarro);
    this.getTotal();
  }

  getTotal(){
    let total = 0;
    this.dataCarro.map((a:any) => {
      total += a.total;
    })
  }
}
