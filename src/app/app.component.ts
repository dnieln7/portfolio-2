import {Component} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio2';

  public onAbout: boolean = false;
  public showFab: boolean = false;

  constructor(private router: Router, private observer: BreakpointObserver) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.onAbout = event.url == '/about' || event.url == '/'
      }
    });

    this.observer.observe(['(max-width: 800px)'])
      .subscribe((state: BreakpointState) => this.showFab = state.matches);


  }
}
