import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FabMenuComponent} from './fab-menu/fab-menu.component';
import {FormsModule} from "@angular/forms";
import {AboutMeComponent} from "./about-me/about-me.component";
import {ProjectsComponent} from './projects/projects.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GalleryModule} from "ng-gallery";
import {ProjectDataService} from "../services/project.data.service";
import {HttpClientModule} from "@angular/common/http";
import {SideBarComponent} from './side-bar/side-bar.component';
import {LayoutModule} from "@angular/cdk/layout";

@NgModule({
  declarations: [
    ProjectDetailComponent,
    ProjectsComponent,
    FabMenuComponent,
    AboutMeComponent,
    AppComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    GalleryModule,
    LayoutModule,
    FormsModule
  ],
  providers: [ProjectDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
