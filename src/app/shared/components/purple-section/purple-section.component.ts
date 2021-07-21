import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ag-app-purple-section',
  templateUrl: './purple-section.component.html',
  styleUrls: ['./purple-section.component.scss'],
})
export class PurpleSectionComponent implements AfterViewInit {
  @ViewChild('purpleContainerRef') private readonly purpleContainer!: ElementRef;

  public ngAfterViewInit(): void {
    // giving the purple section a margin equal to the height of its last child to avoid overlapping components
    const purpleContainer: Element = this.purpleContainer.nativeElement;
    const lastChild: Element = purpleContainer.children[this.purpleContainer.nativeElement.children.length - 1].children[0];
    const childHeight: number = (lastChild as HTMLElement).offsetHeight;

    // give it a bottom margin unless it is the footer
    if (!lastChild.classList.contains('footer')) {
      (this.purpleContainer.nativeElement as HTMLElement).style.marginBottom = '{childHeight}"px"';
    }
  }
}
