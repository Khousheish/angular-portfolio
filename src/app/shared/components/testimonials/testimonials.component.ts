import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ag-app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
  private selectedTestimonial: string = 'testimonial1';
  @ViewChild('testimonial1') private readonly firstTestimonial!: ElementRef;
  @ViewChild('testimonial2') private readonly secondTestimonial!: ElementRef;

  public ngOnInit(): void { }

  // toggle component visibility
  public onToggle(firstSelected: boolean): void {
    if (firstSelected) {
      this.selectedTestimonial = 'testimonial1';
      this.secondTestimonial.nativeElement.style.display = 'none';
      this.firstTestimonial.nativeElement.style.display = '';

    }
    else {
      this.selectedTestimonial = 'testimonial2';
      this.secondTestimonial.nativeElement.style.display = '';
      this.firstTestimonial.nativeElement.style.display = 'none';
    }
  }

  // make the testimonials visible or invisible when this component is done rendering
  public ngAfterViewInit(): void {
    this.secondTestimonial.nativeElement.style.display = 'none';
    this.firstTestimonial.nativeElement.style.display = '';

  }
}
