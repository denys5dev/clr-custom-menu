import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from './menu';
import { Menu, SubMenu } from './model';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  menu: Menu[];
  subMenu: SubMenu[];
  sub: Subscription;
  constructor(private service: LayoutService, private router: Router) {
    this.menu = this.service.getMenu();
  }

  ngOnInit() {
    this.sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) this.findRoute(event.url);
    });
  }

  findRoute(url: string) {
    const menu = this.menu.find((item) => item.link === this.getParent(url));
    this.subMenu = menu ? menu.subMenu : [];
  }

  getParent(str: string) {
    const length = str.substr(1).indexOf('/');
    const parent = str.substring(0, length + 1);
    if (length > 0) {
      return parent;
    }
    return str;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
