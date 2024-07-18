import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from 'src/app/components/footer/footer.component';



@NgModule({
  declarations: [ProductCardComponent, FooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ProductCardComponent, FooterComponent]
})
export class SharedModule { }
