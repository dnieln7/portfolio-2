import {Component, OnInit} from '@angular/core';
import {GalleryItem, ImageItem} from "ng-gallery";
import {Project} from "../../models/project";
import {ProjectDataService} from "../../services/project.data.service";
import {ActivatedRoute} from "@angular/router";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  public showSideBar = false;

  // @ts-ignore
  public project: Project;
  public images: GalleryItem[] = [];

  private id: number = 0;

  constructor(private route: ActivatedRoute, private service: ProjectDataService, private observer: BreakpointObserver) {
    this.route.pathFromRoot[1].url.subscribe(value => {
      this.id = Number(value[1].path);
    });
  }

  ngOnInit(): void {
    this.observer.observe(['(min-width: 800px)'])
      .subscribe((state: BreakpointState) => this.showSideBar = state.matches);

    this.service.findById(this.id).subscribe(result => {
      if (result.successful) {
        console.log(this.project)
        this.project = result.result;
        this.project.images.forEach(image => {
          this.images.push(new ImageItem({src: image, thumb: image}));
        });
      } else {
        alert(result.message);
      }
    });
  }
}
