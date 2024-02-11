import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoappService {


  constructor() { }

  public todoview$:BehaviorSubject<any> = new BehaviorSubject(null);

  public todoresult$:BehaviorSubject<any> = new BehaviorSubject(null);

  public todoedit$:BehaviorSubject<any> = new BehaviorSubject(null)

  setValue(data:any){
    this.todoview$.next(data);

  }
  getValue(){
    return this.todoview$.asObservable();
  }

  viewValue(data:any){
    this.todoresult$.next(data)

  }
  getView(){
    return this.todoresult$.asObservable()
  }

  seteditValue(data:any){
    this.todoedit$.next(data)
  }
  geteditValue(){
    return this.todoedit$.asObservable()
  }





}
