import {Project} from './project';

export class ProjectResponse {
  public successful: boolean;
  public message: string;
  public result: Project;

  constructor(successful: boolean, message: string, result: Project) {
    this.successful = successful;
    this.message = message;
    this.result = result;
  }
}
