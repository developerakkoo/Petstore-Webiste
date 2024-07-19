import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bestsellers', url: '/folder/inbox', icon: 'mail' },
    { title: 'Dogs', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Cats', url: '/folder/favorites', icon: 'heart' },
    { title: 'Health & Fitness', url: '/folder/archived', icon: 'archive' },
    { title: 'Toys', url: '/folder/trash', icon: 'trash' },
   
  ];
  constructor(private menu: MenuController
    ) {

    
    }
}
