import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/project';

@Component({
  selector: 'ag-app-proj-card',
  templateUrl: './proj-card.component.html',
  styleUrls: ['./proj-card.component.scss'],
})
export class ProjCardComponent {
  @Input() public project!: Project;
  @Input() public projectDescription!: string[];
  public imagesPath: string = '../../../assets/images/';

}
