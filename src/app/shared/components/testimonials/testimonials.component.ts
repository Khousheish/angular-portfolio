import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  selectedTestimonial = "testimonial1";
  @ViewChild("testimonial1") firstTestimonial!: ElementRef;
  @ViewChild("testimonial2") secondTestimonial!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  //toggle component visibility 
  onToggle(firstSelected: boolean) {
    if (firstSelected) {
      this.selectedTestimonial = "testimonial1";
      this.secondTestimonial.nativeElement.style.display = "none";
      this.firstTestimonial.nativeElement.style.display = "";

    }
    else {
      this.selectedTestimonial = "testimonial2"
      this.secondTestimonial.nativeElement.style.display = "";
      this.firstTestimonial.nativeElement.style.display = "none";
    }
  }

  //make the testimonials visible or invisible when this component is done rendering 
  ngAfterViewInit() {
    this.secondTestimonial.nativeElement.style.display = "none";
    this.firstTestimonial.nativeElement.style.display = "";

  }
}
