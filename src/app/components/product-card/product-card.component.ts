import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddToCartPage } from 'src/app/modals/add-to-cart/add-to-cart.page';

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
  constructor(private modalController: ModalController) { }

  ngOnInit() {}


  async presentModalProduct() {
    const modal = await this.modalController.create({
    component: AddToCartPage,
    componentProps: { value: 123 }
    });
  
    await modal.present();
  
    const data = await modal.onDidDismiss();
    console.log(data)
  
  }
  addToCartEventHandler(){
    this.addToCartEvent.emit(1);
    this.presentModalProduct();
  }
}
