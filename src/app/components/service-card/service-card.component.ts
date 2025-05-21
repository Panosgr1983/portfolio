import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html'
})
export class ServiceCardComponent {
  @Input() service!: {
    icon: string;
    title: string;
    description: string;
    details: string[];
  };
}