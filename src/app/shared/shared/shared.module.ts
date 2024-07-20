import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { InfoBarComponent } from 'src/app/components/info-bar/info-bar.component';
import { TimelineComponent } from 'src/app/components/timeline/timeline.component';



@NgModule({
  declarations: [ProductCardComponent, FooterComponent,NavbarComponent,InfoBarComponent,TimelineComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ProductCardComponent, FooterComponent,NavbarComponent,InfoBarComponent,TimelineComponent]
})
export class SharedModule { }
