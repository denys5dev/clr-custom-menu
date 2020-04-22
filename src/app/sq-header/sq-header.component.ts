import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-sq-header',
  templateUrl: './sq-header.component.html',
  styleUrls: ['./sq-header.component.scss']
})
export class SqHeaderComponent implements OnInit {
  @Input() menu;
  constructor() { }

  ngOnInit() {
  }
}
