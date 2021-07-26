import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'ag-app-purple-section',
  templateUrl: './purple-section.component.html',
  styleUrls: ['./purple-section.component.scss'],
})
export class PurpleSectionComponent implements AfterViewInit{
  @Input() public height!: string;
  @ViewChild('purpleDivRef') private readonly purpleDiv!: ElementRef;

  public ngAfterViewInit(): void {
    const purpleDiv: Element = this.purpleDiv.nativeElement;
    // setting the height
    console.log(purpleDiv);
    (purpleDiv as HTMLElement).style.height = this.height;
    // giving the purple section a margin equal to the height of its last child to avoid overlapping components
    const lastChild: Element = purpleDiv.children[this.purpleDiv.nativeElement.children.length - 1].children[0];
    const childHeight: number = (lastChild as HTMLElement).offsetHeight;

    // give it a bottom margin unless it is the footer
    if (!lastChild.classList.contains('footer')) {
      (this.purpleDiv.nativeElement as HTMLElement).style.marginBottom = '{childHeight}"px"';
    }
  }
}
