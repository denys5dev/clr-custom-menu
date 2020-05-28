import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sub: Subscription;
  pageUrlName: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.url.subscribe((event) => {
      this.pageUrlName = event[0].path || 'error';
    });
  }

}
