import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrapdownComponent } from './drapdown.component';

describe('DrapdownComponent', () => {
  let component: DrapdownComponent;
  let fixture: ComponentFixture<DrapdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrapdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrapdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
