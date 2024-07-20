import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form!:FormGroup;
  isLoggedIn:boolean = false;
  interval:any;
  isLoading:boolean = false;

  showEnterOtp:boolean = false;
  constructor(private menu: MenuController,
    private router: Router,
        private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      phoneNo: ["" ,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
   
    
  }

  ngOnInit() {
   
   

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

  openPage(pageName:string){
    this.router.navigate([pageName]);
  }

  onOtpChange(ev:any){
    console.log(ev);
    
  }

  async onSubmit(){
    if(this.form.valid){
      console.log(this.form.value);
      this.showEnterOtp = true;
      
    }
  }

  verifyOTP(){
   this.router.navigate(['folder','home']);
  }

}
