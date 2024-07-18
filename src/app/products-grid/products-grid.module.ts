import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsGridPageRoutingModule } from './products-grid-routing.module';

import { ProductsGridPage } from './products-grid.page';
import { SharedModule } from "../shared/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsGridPageRoutingModule,
    SharedModule
],
  declarations: [ProductsGridPage]
})
export class ProductsGridPageModule {}
