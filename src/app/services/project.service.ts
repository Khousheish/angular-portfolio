import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from '../shared/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly apiUrl: string = 'http://localhost:5000/projects';

  private constructor(private readonly http: HttpClient) { }

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
