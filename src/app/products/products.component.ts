import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public employes:any[] = [
    {name:"sunil",company:"tcs",experiance:4,package:1100000,workingemploye:true},
    {name:"anil",company:"hcl",experiance:3,package:800000,workingemploye:false},
    {name:"visnu",company:"deloite",experiance:2,package:400000,workingemploye:true},
    {name:"vinod",company:"ibm",experiance:8,package:1300000,workingemploye:false},
    {name:"afzal",company:"amezon",experiance:10,package:1800000,workingemploye:true},
    {name:"naveen",company:"cognizant",experiance:3,package:800000,workingemploye:false},
    {name:"rakesh",company:"wipro",experiance:5,package:1000000,workingemploye:true},
    {name:"bharath",company:"virtusa",experiance:4,package:1100000,workingemploye:false}
  ]
  experiancelowtohigh(){
    this.employes = this.employes.sort((a:any,b:any)=>a.experiance - b.experiance)
  }
  experiancehightolow(){
    this.employes = this.employes.sort((a:any,b:any)=>b.experiance - a.experiance)
  }
  packagelowtohigh(){
    this.employes = this.employes.sort((a:any,b:any)=>a.package - b.package)
  }
  packagehightolow(){
    this.employes = this.employes.sort((a:any,b:any)=>b.package - a.package)
  }
  hike(){
    this.employes = this.employes.map((add:any)=>{
      add.package = add.package+(add.package*20/100);
      return add

    })
  }

  bonus(){
    this.employes = this.employes.map((sum:any)=>{
      sum.package = sum.package+5000;
      return sum

    })
  }
  juniour(){
    this.employes = this.employes.filter((juniour:any)=>{
      if (juniour.experiance<=5) {
        return juniour
        
      }

    })

  }

  seniour(){
    this.employes = this.employes.filter((seniour)=>{
      if (seniour.experiance>5) {
        return seniour
        
      }
    })
  }
  ctc(){
    let totalprice = this.employes.reduce((sum1:any,sum2:any)=>sum1+sum2.package,0)
    alert(totalprice)
  }

  totalemploye(){
    let totalemploye = this.employes.length;
    alert(totalemploye)
  }

  delete(i:number){
    this.employes.splice(i,1)
  }

}
