import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from './menu';
import { Menu, SubMenu } from './model';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  ActivatedRoute,
  ActivationEnd,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  menu: Menu[];
  subMenu: SubMenu[];
  sub: Subscription;
  constructor(private service: LayoutService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.menu = this.service.getMenu();

    this.sub = this.activatedRoute.params.subscribe((event) => {
      console.log(event);
      // You only receive NavigationStart events
      // this.menu = this.service.getMenu();
      // const menu = this.menu.find(item => item.link === event.url);
      // this.subMenu = menu ? menu.subMenu : [];
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
