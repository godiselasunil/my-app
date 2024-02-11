import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public baseUrl:string = "https://6128991386a213001729f9df.mockapi.io/test/v1/student"

  constructor(private _httpClient:HttpClient) { }

  getDetails():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }
  deletedetails(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id)
  }
  
}
