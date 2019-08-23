import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

// -- Models Interfaces -- //

interface Item { 
	name: string, 
	amount: number ,
  price:number,
  cost:  number
  };


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Form: FormGroup;

  item: Item = { name: null, amount: null ,
  price:null, cost:  null };
  //I want to use FormControl to add new article

  constructor() { }

  ngOnInit() {
    this.Form = new FormGroup({
      'name': new FormControl(null, [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      'amount': new FormControl(1,[Validators.required,Validators.pattern('[0-9]*')]),
      'price': new FormControl(null,[Validators.required,Validators.pattern('([0-9]*[.])?[0-9]*')]),
      'cost': new FormControl(null,[Validators.required,Validators.pattern('([0-9]*[.])?[0-9]*')]),
    });
   }

  onSubmit() {
    // first, I have to create a new article
    // then, assign to the price and cost that corresponding id
    
    this.item.name = this.Form.get('name').value;
    this.item.amount = this.Form.get('amount').value;
    this.item.price = this.Form.get('price').value;
    this.item.cost = this.Form.get('cost').value;
   
    console.log(this.item);
  }

}
