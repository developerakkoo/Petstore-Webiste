import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ResponsiveService } from '../services/responsive.service';
import { AddToCartPage } from '../modals/add-to-cart/add-to-cart.page';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.page.html',
  styleUrls: ['./products-grid.page.scss'],
})
export class ProductsGridPage implements OnInit {

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
 
  slidesPerView = 1;
  navigation:string = "";

  isLoggedIn:boolean = false;
  interval:any;
  isLoading:boolean = true;

  constructor(private menu: MenuController,
              private responsive: ResponsiveService,
              private modalController: ModalController
  ) {
  }
  ngOnInit() {
  }

  onSearchChange(ev:any){}

  rangeChange(ev:any){}

  openPage(){

  }

  async presentModalProduct() {
    const modal = await this.modalController.create({
    component: AddToCartPage,
    componentProps: { value: 123 }
    });
  
    await modal.present();
  
    const data = await modal.onDidDismiss();
    console.log(data)
  
  }
}
