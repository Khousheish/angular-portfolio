import { Project } from '@Models/project.model';
import { ActionReducer, createReducer, on } from '@ngrx/store';

import { getProjects, getProjectsSuccess } from '../actions/project.actions';
import { ProjectState } from '../project.state';

export const projectsInitialState: ProjectState = {
  projects:{
    projects: [],
  },
};

export const projectReducer: ActionReducer<ProjectState> = createReducer(
  projectsInitialState,
  on(getProjects, (state: ProjectState): ProjectState => state),
  on(getProjectsSuccess, (state: ProjectState, action): ProjectState => ({ // Payload sent with the action disptched is inside action
    ...state,
    projects: {
      projects: action.projects
    }, // Editing the state: reassigning projects property
  })),
);
