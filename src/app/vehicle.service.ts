import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  public baseUrl:string = "https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"
  // public baseUrl:string = "/assets/vehicle.json";

  constructor(private _httpClient:HttpClient) { }

  getVehicles():Observable<Vehicle[]>{
    return this._httpClient.get<Vehicle[]>(this.baseUrl)
  
  }
  getVehicle(id:string):Observable<Vehicle>{
    return this._httpClient.get<Vehicle>(this.baseUrl+"/"+id)
  
  }
  getFilterdVehicle(term:string):Observable<Vehicle[]>{
    return this._httpClient.get<Vehicle[]>(this.baseUrl+"?filter="+term)

  }
  getSortedVehicle(column:string, order:string):Observable<Vehicle[]>{
    return this._httpClient.get<Vehicle[]>(this.baseUrl+"?sortBy="+column+"&order="+order)

  }
  getPageVehicle(page:number):Observable<Vehicle[]>{
    return this._httpClient.get<Vehicle[]>(this.baseUrl+"?limit=10&page="+page);

  }
  deleteVehicle(id:string):Observable<Vehicle>{
    return this._httpClient.delete<Vehicle>(this.baseUrl+"/"+id)
  }

  createVehicle(data:Vehicle):Observable<Vehicle>{
    return this._httpClient.post<Vehicle>(this.baseUrl,data);

  }
  UpdateVehicle(id:string,data:Vehicle):Observable<Vehicle>{
    return this._httpClient.put<Vehicle>(this.baseUrl+"/"+id,data);

  }
}
