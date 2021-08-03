import { Project } from '@Models/project.model';
import { createAction, props } from '@ngrx/store';

export const getProjects = createAction('[Main Page] Get Projects');

export const getProjectsSuccess = createAction(
  '[Main Page] Get Projects Success',
  props<{ projects: Project[] }>(),
);
