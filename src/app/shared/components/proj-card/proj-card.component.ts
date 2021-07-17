import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/Project';

@Component({
  selector: 'app-proj-card',
  templateUrl: './proj-card.component.html',
  styleUrls: ['./proj-card.component.scss']
})
export class ProjCardComponent implements OnInit {
  @Input() project!: Project;
  @Input() projectDescription!: string[];
  imagesPath: string = "../../../assets/images/";


  constructor() { }

  ngOnInit(): void {
  }

}
