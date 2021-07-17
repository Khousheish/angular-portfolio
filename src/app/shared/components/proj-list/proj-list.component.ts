import { Component, OnInit } from '@angular/core';
import { Project } from '../../Project'
import { ProjectService } from '../../services/project.service'

@Component({
  selector: 'app-proj-list',
  templateUrl: './proj-list.component.html',
  styleUrls: ['./proj-list.component.scss']
})
export class ProjListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects) => this.projects = projects)
  }


}
