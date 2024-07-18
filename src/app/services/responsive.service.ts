import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  screenSize$!: Observable<{ width: number, height: number }>;
  isDesktopScreen:boolean = true;

  constructor(private platform:Platform) { }




  getScreenSize(): Observable<{ width: number, height: number }> {
    return new Observable((observer) => {
      observer.next({
        width: this.platform.width(),
        height: this.platform.height(),
      });

      // Watch for orientation changes and update the observer
      window.addEventListener('resize', () => {
        observer.next({
          width: this.platform.width(),
          height: this.platform.height(),
        });
      });

      // Clean up the event listener when the component is destroyed
      return () => {
        window.removeEventListener('resize', () => { });
      };
    });
  }
}
