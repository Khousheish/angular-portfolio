import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProjectService } from 'app/services/project.service';
import { exhaustMap } from 'rxjs/operators';

import { getProjects } from '../actions/project.actions';

@Injectable()
export class ProjectEffects {

  $loadProjects = createEffect(() =>
    this.action$.pipe(
      ofType(getProjects),
      exhaustMap(() => this.projectService.getProjects()),
    ), { dispatch: false }
  )

  public constructor(private readonly action$: Actions, private readonly projectService: ProjectService) { }
}