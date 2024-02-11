import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public baseUrl:string = "https://freetestapi.com/api/v1/actors"

  constructor(private _httpClient:HttpClient) { }
  getActor():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }
  deleteActor(id:any):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id)
  }
  
}
