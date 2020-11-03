import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produt-page',
  templateUrl: './produt-page.component.html',
  styleUrls: ['./produt-page.component.css']
})
export class ProdutPageComponent implements OnInit {
  product_list = [
    { name:'Berries',price:'10.00',quantity:'1', image:'./../../assets/images/background-2277_1920.jpg'},
    { name:'Kale',price:'1.00',quantity:'1', image:'./../../assets/images/cabbage-84455_1920.jpg'},
    { name:'Pears',price:'3.00',quantity:'1', image:'./../../assets/images/fruit-1534494_1920.jpg'}
  ];
  cart=[];
total = 0;
  constructor() { }

  ngOnInit() {
  }


  addToCart(i){
    this.cart.push(this.product_list[i]);
  console.log(this.cart)
  console.log(i)
  this.calculateTotals()
}
removefromCart(i){
  this.cart.splice(i,1)
  console.log(this.cart)
  this.calculateTotals()
}
calculateTotals(){
   this.total =0;
  this.cart.forEach(x=>{
    this.total = this.total + Number(x.price)
   
  });
  console.log(this.total)
}

}
