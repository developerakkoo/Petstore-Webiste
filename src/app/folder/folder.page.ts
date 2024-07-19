import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicSlides, MenuController } from '@ionic/angular';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SwiperOptions } from 'swiper/types';
import { ResponsiveService } from '../services/responsive.service';

// import { SlowMo } from "gsap/EasePack";
    
// import { Flip } from "gsap/Flip";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { EaselPlugin } from "gsap/EaselPlugin";
// import { TextPlugin } from "gsap/TextPlugin";


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  swiperModules = [IonicSlides];
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
 
  slidesPerView = 1;
  navigation:string = "";

  isLoggedIn:boolean = false;
  interval:any;
  isLoading:boolean = false;

  constructor(private menu: MenuController,
              private responsive: ResponsiveService
  ) {


    this.responsive.getScreenSize()
    .subscribe({
      next:(value:any) =>{
        console.log(value);
        let width = value.width;

        if (width >= 1024) {
          this.slidesPerView = 6;
          this.navigation = "navigation:  { nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',}"
        } else if (width >= 768) {
          this.slidesPerView = 3;
            this.navigation = "navigation:  { nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',}"
        } else if (width >= 640) {
          this.slidesPerView = 2;
          this.navigation = "none";
        } else if (width >= 440) {
          this.slidesPerView = 1.2;
          this.navigation = "none";

        }
        else{
          this.slidesPerView = 1;
          this.navigation = "none";

        }
    

      }
    })
    
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
   

    // this.interval = setInterval(() =>{
    //   this.isLoading = false;
    // },3000)

  }
  
  ionViewDidLoad(){
    // gsap.registerPlugin(ScrollTrigger);
    // this.initScrollTriggers();
   
  }

  ionViewDidLeave(){
    clearInterval(this.interval);
  }
  animate(){
    gsap.to(document.querySelector("#third"),{ rotation: 27, x: 700, duration: 1 });
  }

  openPage(){

  }
  initScrollTriggers() {
    document.querySelectorAll(".box").forEach(box => {
      const scrollBox = gsap.timeline({
        scrollTrigger: {
          trigger: box,
          pin: true,
          start: "top center",
          // end: "bottom bottom",
          markers: true,
          toggleActions: "restart pause reverse pause"
        }
      });
      scrollBox.from(box, { x: 30, opacity: 0 });
    });
  }
}
