import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Para cambiar la peticion a otro server solo cambiar la ruta
  private apiURL = 'http://localhost:3000/products'
  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get<Product[]>(this.apiURL);
  }

  updateStock(productId:number,stock:number):Observable<any>{
    const body ={"stock":stock}
    return this.http.patch<any>(`${this.apiURL}/${productId}`,body);
  }
}
