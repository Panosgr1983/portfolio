import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html'
})
export class PortfolioItemComponent {
  @Input() item!: {
    image: string;
    title: string;
    category: string;
    description: string;
  };
}