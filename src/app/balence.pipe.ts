import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'balence'
})
export class BalencePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    if(args[0]=='india'){
      return "Rs. "+value;
    }
    else{
      return "$. "+value
    }
  }

}
