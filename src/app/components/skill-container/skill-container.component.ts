import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skill-container',
  templateUrl: './skill-container.component.html',
  styleUrls: ['./skill-container.component.scss']
})
export class SkillContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('skillContainerRef') skillContainerRef!: ElementRef;
  maxHeight: number = 0;

  constructor() { }
  
  ngAfterViewInit(): void {
    //getting the largest div to set the others to have the same size as it
    for (let skill of this.skillContainerRef.nativeElement.children) {
      if (skill.offsetHeight > this.maxHeight) {
        this.maxHeight = skill.offsetHeight;
      }
    }

    //giving all divs the same size
    for (let skill of this.skillContainerRef.nativeElement.children) {
      (skill as HTMLElement).style.height = `${this.maxHeight}px`;
    }
  }

  ngOnInit(): void {
  }

}
