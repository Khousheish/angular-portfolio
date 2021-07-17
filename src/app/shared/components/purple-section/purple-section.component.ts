import { AfterViewInit } from '@angular/core';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-purple-section',
  templateUrl: './purple-section.component.html',
  styleUrls: ['./purple-section.component.scss']
})
export class PurpleSectionComponent implements OnInit, AfterViewInit {
  @ViewChild('purpleContainerRef') purpleContainer!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    //giving the purple section a margin equal to the height of its last child to avoid overlapping components
    let lastChild = this.purpleContainer.nativeElement.children[this.purpleContainer.nativeElement.children.length - 1].children[0];
    let childHeight = lastChild.offsetHeight;
    console.log(lastChild)
    console.log(childHeight);
    //give it a bottom margin unless it is the footer
    if(!lastChild.classList.contains('footer')){
      (this.purpleContainer.nativeElement as HTMLElement).style.marginBottom = childHeight + 'px';
    }
  }


  ngOnInit(): void {
  }

}
