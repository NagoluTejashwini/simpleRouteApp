import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.css']
})
export class CartChildComponent implements OnInit {

  @Input()  cartNumber:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
