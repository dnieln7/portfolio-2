export class Project {
  public id: number;
  public name: string;
  public summary: string;
  public year: number;
  public importance: number;
  public thumbnail: string;
  public images: Array<string>;
  public tags: Array<string>;
  public duration: string;
  public description: string;
  public features: Array<string>;
  public technologies: Array<string>;
  public androidUrl: string;
  public androidGit: string;
  public webUrl: string;
  public webGit: string;
  public programUrl: string;
  public programGit: string;

  constructor(id: number, name: string, summary: string, year: number, importance: number, thumbnail: string, images: Array<string>, tags: Array<string>, duration: string, description: string, features: Array<string>, technologies: Array<string>, androidUrl: string, androidGit: string, webUrl: string, webGit: string, programUrl: string, programGit: string) {
    this.id = id;
    this.name = name;
    this.summary = summary;
    this.year = year;
    this.importance = importance;
    this.thumbnail = thumbnail;
    this.images = images;
    this.tags = tags;
    this.duration = duration;
    this.description = description;
    this.features = features;
    this.technologies = technologies;
    this.androidUrl = androidUrl;
    this.androidGit = androidGit;
    this.webUrl = webUrl;
    this.webGit = webGit;
    this.programUrl = programUrl;
    this.programGit = programGit;
  }
}
