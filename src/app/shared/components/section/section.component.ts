import { Component, Input } from '@angular/core';

@Component({
  selector: 'ag-app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input() public title!: String;
  @Input() public description!: String;
}
