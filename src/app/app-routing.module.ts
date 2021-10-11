import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutMeComponent} from "./about-me/about-me.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'about'},
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
