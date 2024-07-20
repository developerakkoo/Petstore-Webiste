import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ResponsiveService } from '../services/responsive.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  isLoggedIn:boolean = true;
  interval:any;
  isLoading:boolean = false;

  constructor(private menu: MenuController,
    private router: Router,
              private responsive: ResponsiveService
  ) {


   
    
  }

  ngOnInit() {
  }
  openPage(pageName:string){
    this.router.navigate([pageName]);
  }

  segmentChanged(ev:any){
    
  }

  checkout(){
    
  }
}
