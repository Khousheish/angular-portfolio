import { Component, OnInit } from '@angular/core';

import { Project } from '../../../project';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'ag-app-proj-list',
  templateUrl: './proj-list.component.html',
  styleUrls: ['./proj-list.component.scss'],
})
export class ProjListComponent implements OnInit {
  public projects: Project[] = [];

  public constructor(private readonly projectService: ProjectService) { }

  public ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects: Project[]): Project[] => this.projects = projects);
  }
}
