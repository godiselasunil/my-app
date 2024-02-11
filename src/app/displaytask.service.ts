import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplaytaskService {

  public baseUrl:string = "https://62abe711bd0e5d29af16f450.mockapi.io/products"

  constructor(private _httpClient:HttpClient) { }

  getproducts():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }

  deleateProduct(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id)
  }
  
}
