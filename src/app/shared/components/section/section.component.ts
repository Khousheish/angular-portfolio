import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ag-app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() public title!: String;
  @Input() public description!: String;

  public ngOnInit(): void { }

}
