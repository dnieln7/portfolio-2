import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {handleError} from './data.service.utils';
import {Project} from '../models/project';
import {ProjectResponse} from '../models/project-response';
import {environment} from '../environments/environment';

@Injectable()
export class ProjectDataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<Project>> {
    return this.http.get<Array<Project>>(environment.apiUrl + '/projects', this.httpOptions)
      .pipe(retry(1), catchError(handleError));
  }

  public findById(id: number): Observable<ProjectResponse> {
    return this.http.get<ProjectResponse>(environment.apiUrl + '/projects/' + id, this.httpOptions)
      .pipe(retry(1), catchError(handleError));
  }
}
