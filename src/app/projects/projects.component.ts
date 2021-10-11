import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/project";
import {ProjectDataService} from "../../services/project.data.service";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public showSideBar = false;

  public projects: Array<Project> = [];

  constructor(private service: ProjectDataService, private observer: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.observer.observe(['(min-width: 800px)'])
      .subscribe((state: BreakpointState) => this.showSideBar = state.matches);

    this.service.findAll().subscribe(result => {
      this.projects = result.sort((a, b) => {
        if (a.importance < b.importance) {
          return 1;
        }
        if (a.importance > b.importance) {
          return -1;
        }

        return 0;
      });
    });
  }

}
