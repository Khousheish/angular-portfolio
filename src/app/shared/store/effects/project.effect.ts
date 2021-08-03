import { Injectable } from '@angular/core';
import { Project } from '@Models/project.model';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { ProjectService } from 'app/services/project.service';
import { Observable } from 'rxjs';
import { exhaustMap, map, switchMap } from 'rxjs/operators';

import { getProjects, getProjectsSuccess } from '../actions/project.actions';

@Injectable()
export class ProjectEffects {

  private readonly $loadProjects: CreateEffectMetadata = createEffect(() =>
    this.action$.pipe(
      ofType(getProjects),
      switchMap((): Observable<Project[]> => this.projectService.getProjects()),
      map((projects: Project[]) => getProjectsSuccess({ projects })) //projects to match the key of the obj in the prop
    ),
  );

  public constructor(private readonly action$: Actions, private readonly projectService: ProjectService) { }
}
