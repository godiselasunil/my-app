import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatetaskService {

  constructor( private _httpClient:HttpClient) { }

  postProduct(data:any):Observable<any>{
    return this._httpClient.post("https://62abe711bd0e5d29af16f450.mockapi.io/products",data)

  }
  getproduct(id:string){
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/products/"+id)
  }
  updateproduct(id:string,data:any){
    return this._httpClient.put("https://62abe711bd0e5d29af16f450.mockapi.io/products/"+id,data)
  }

  
}
