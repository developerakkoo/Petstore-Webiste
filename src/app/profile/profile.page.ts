import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ResponsiveService } from '../services/responsive.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  isLoggedIn:boolean = true;
  interval:any;
  isLoading:boolean = false;

  constructor(private menu: MenuController,
    private router: Router,
              private responsive: ResponsiveService
  ) { }

  ngOnInit() {
  }
  openPage(pageName:string){
    this.router.navigate([pageName]);
  }

  addAddress(){
    
  }
}
