import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ag-app-skill-container',
  templateUrl: './skill-container.component.html',
  styleUrls: ['./skill-container.component.scss'],
})
export class SkillContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('skillContainerRef') private readonly skillContainerRef!: ElementRef;
  private maxHeight: number = 0;

  public ngAfterViewInit(): void {
    // getting the largest div to set the others to have the same size as it
    for (const skill of this.skillContainerRef.nativeElement.children) {
      if (skill.offsetHeight > this.maxHeight) {
        this.maxHeight = skill.offsetHeight;
      }
    }

    // giving all divs the same size
    for (const skill of this.skillContainerRef.nativeElement.children) {
      (skill as HTMLElement).style.height = `${this.maxHeight}px`;
    }
  }

  public ngOnInit(): void { }

}
