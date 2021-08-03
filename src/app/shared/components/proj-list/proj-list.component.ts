import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getProjects } from 'app/shared/store/actions/project.actions';
import { ProjectState } from 'app/shared/store/project.state';
import { projectSelector } from 'app/shared/store/selectors/project.selector';
import { Observable } from 'rxjs';

import { Project } from '../../models/project.model';

@Component({
  selector: 'ag-app-proj-list',
  templateUrl: './proj-list.component.html',
  styleUrls: ['./proj-list.component.scss'],
})
export class ProjListComponent implements OnInit{
  // public projects: Project[] = [];
  public imgBaseUrl: string = '../../../assets/images/';

  public projects$: Observable<Project[]> = this.store.pipe(select(projectSelector.selectProject));

  public constructor(private readonly store: Store<ProjectState>) { }

  public ngOnInit(): void {
    // this.projectService.getProjects().subscribe((projects: Project[]): Project[] => this.projects = projects);
    this.store.dispatch(getProjects());
  }


}
