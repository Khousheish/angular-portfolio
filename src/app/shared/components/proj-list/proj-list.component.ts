import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProjects } from 'app/shared/store/actions/project.actions';

import { ProjectService } from '../../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'ag-app-proj-list',
  templateUrl: './proj-list.component.html',
  styleUrls: ['./proj-list.component.scss'],
})
export class ProjListComponent implements OnInit {
  public projects: Project[] = [];
  public imgBaseUrl: string = '../../../assets/images/';

  public constructor(private readonly store: Store) { }

  public ngOnInit(): void {
    // this.projectService.getProjects().subscribe((projects: Project[]): Project[] => this.projects = projects);
    this.getAllProjects();

  }

  private getAllProjects(): void{
    this.store.dispatch(getProjects());
  }

}
