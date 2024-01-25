import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  public term:string = "";
  public add:any = {productname:"",price:0,rating:0,freedelivary:"false"}
  

  public datas:any = [
    {productname:'pen',price:10,rating:'3',freedelivary:true,action:'delete'},
    {productname:'phone',price:100,rating:'2',freedelivary:false,action:'delete'},
    {productname:'shirt',price:400,rating:'4',freedelivary:true,action:'delete'},
    {productname:'cap',price:200,rating:'5',freedelivary:false,action:'delete'},
    {productname:'mobile case',price:300,rating:'2',freedelivary:true,action:'delete'},
    {productname:'remote',price:400,rating:'2.5',freedelivary:false,action:'delete'}
  ];


  ass(){
    this.datas = this.datas.sort((a:any,b:any)=>a.price - b.price);

  }
  dec(){
    this.datas = this.datas.sort((a:any,b:any)=>b.price - a.price);

  }
  assr(){
    this.datas = this.datas.sort((a:any,b:any)=>a.rating - b.rating);

  }
  decr(){
    this.datas = this.datas.sort((a:any,b:any)=>b.rating - a.rating);

  }

  filter(){
    this.datas = this.datas.filter((product:any)=>product.productname.includes(this.term))
  }
  freeDelivery(){
    this.datas = this.datas.filter((product:any)=>product.freedelivary==true);
  }
  discount(){
    this.datas = this.datas.map((product:any)=>{
      product.price = product.price/2;
      return product
    })
  }

  dcharge(){
    this.datas = this.datas.map((product:any)=>{

      if(product.freedelivary == false){
        product.price = product.price+50;
        return product;

      }
      else{
        return product;
      }


    
    })
  }

  total(){
    let totalprice = this.datas.reduce((sum:any,product:any)=>sum+product.price,0)
    alert(totalprice)
  }
  totalcart(){
    let total = this.datas.length;
    alert(total)
  }
  
  addcart(){
    this.datas.push({...this.add})
  }
  delete(i:number){
    this.datas.splice(i,1);
  }




}
