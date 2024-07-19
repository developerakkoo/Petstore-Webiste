import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  showNavbar(){
    let nav = document.querySelector(".nav-content") as HTMLElement;
    nav.style.display = "block";
    nav.classList.add('animate__animated', 'animate__fadeIn', 'animate__fast');
  }


  hideNavbar(){
    let nav = document.querySelector(".nav-content") as HTMLElement;
    nav.classList.add('animate__animated', 'animate__backInUp');
    nav.style.display = "none";

  }
}
