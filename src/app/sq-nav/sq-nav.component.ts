import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SubMenu } from '../model';

@Component({
  selector: 'app-sq-nav',
  templateUrl: './sq-nav.component.html',
  styleUrls: ['./sq-nav.component.scss']
})
export class SqNavComponent implements OnInit {
  @Input() subMenu;
  @Output() navigateEvent: EventEmitter<SubMenu> = new EventEmitter<SubMenu>();
  constructor() { }

  ngOnInit() {
  }
}
