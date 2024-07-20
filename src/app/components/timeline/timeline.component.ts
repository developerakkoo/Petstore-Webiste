import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent  implements OnInit {

  @Input() step: number = 1;

  ngOnChanges(): void {
    this.updateTimeline(this.step);
  }

  updateTimeline(step: number): void {
    const steps = document.querySelectorAll('.timeline-step');
    steps.forEach((stepElement, index) => {
      if (index < step) {
        stepElement.classList.add('completed');
      } else {
        stepElement.classList.remove('completed');
      }
    });
  }

  ngOnInit() {}

  segmentChanged(ev:any){
    
  }
}
