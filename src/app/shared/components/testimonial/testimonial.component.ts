import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  @Input() imgSrc!: string;
  @Input() testimonial!: string;
  @Input() witness!: string;
  @Input() witnessPosition!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
