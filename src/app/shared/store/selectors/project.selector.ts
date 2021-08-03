import { Project } from '@Models/project.model';
import { createSelector } from '@ngrx/store';

import { ProjectState } from '../project.state';

// export const projectSelector = createSelector(
//   (state: ProjectState): Project[] => state.projects,
//   (state: ProjectState): Project[] => state.projects,
//   (projects: Project[]): Project[] => projects,
// );


export const projectSelector = {
  selectProject: (state: ProjectState): Project[] => <Project[]>state.projects.projects,
};