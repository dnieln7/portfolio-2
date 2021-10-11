import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fab-menu',
  templateUrl: './fab-menu.component.html',
  styleUrls: ['./fab-menu.component.scss']
})
export class FabMenuComponent implements OnInit {

  public fabVisible: boolean = true;
  public menuVisible: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public showMenu(): void {
    this.fabVisible = false;
    this.menuVisible = true;
  }

  public hideMenu(): void {
    this.fabVisible = true;
    this.menuVisible = false;
  }
}
