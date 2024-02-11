import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalctaskService {

  constructor() { }

  public result:BehaviorSubject<number>=new BehaviorSubject(0);

  setValue(data:number){
    this.result.next(data)
  }
  getValue(){
    return this.result
  }
}
