
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { TemplateFormComponent } from '../template-form/template-form.component';

import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class SliderComponent {
  currentComponent: any;
  slideState: 'next' | 'prev' = 'next';

  constructor() {
    this.currentComponent = ReactiveFormComponent; // Initial component
  }

  showReactiveFormComponent() {
    if (this.currentComponent !== ReactiveFormComponent) {
      this.currentComponent = ReactiveFormComponent;
      this.slideState = 'next';
    }
  }

  showTemplateFormComponent() {
    if (this.currentComponent !== TemplateFormComponent) {
      this.currentComponent = TemplateFormComponent;
      this.slideState = 'prev';
    }
  }
}
