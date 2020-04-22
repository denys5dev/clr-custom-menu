/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SqNavComponent } from './sq-nav.component';

describe('SqNavComponent', () => {
  let component: SqNavComponent;
  let fixture: ComponentFixture<SqNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
