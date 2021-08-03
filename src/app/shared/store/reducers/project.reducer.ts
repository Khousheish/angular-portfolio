import { Project } from '@Models/project.model';
import { ActionReducer, createReducer, on } from '@ngrx/store';

import { getProjects } from '../actions/project.actions';
import { ProjectState } from '../project.state';

export const projectsInitialState: ProjectState = {
  projects: [],
};

export const projectReducer: ActionReducer<ProjectState> = createReducer(
  projectsInitialState,
  on(getProjects, (state: ProjectState): ProjectState => state),
);
