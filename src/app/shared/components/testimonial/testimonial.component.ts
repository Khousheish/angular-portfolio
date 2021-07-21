import { Component, Input } from '@angular/core';

@Component({
  selector: 'ag-app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  @Input() public imgSrc!: string;
  @Input() public testimonial!: string;
  @Input() public witness!: string;
  @Input() public witnessPosition!: string;

}
