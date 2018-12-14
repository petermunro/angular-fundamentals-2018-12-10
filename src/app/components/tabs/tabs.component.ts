import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/app.routes';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tabs: { name: string; url: string }[];

  constructor() {
    this.tabs = routes
      .filter(route => route.path)
      .map(route => ({
        name: route.path,
        url: `/${route.path}`
      }));
  }

  ngOnInit() {}
}
