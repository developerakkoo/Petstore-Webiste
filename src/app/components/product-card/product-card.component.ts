import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent  implements OnInit {

  @Input() _id: string = "";
  @Input() companyName: string = "Pedigree";
  @Input() productName: string = "Pedigree Biscuits";
  @Input() price: number = 569;
  @Input() imageUrl: string = "assets/product-01.svg";
  @Input() starCount: number = 4;


  @Output() addToCartEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {}

}
