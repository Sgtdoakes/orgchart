import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgchartComponent } from './org-chart.component';

describe('OrgChartComponent', () => {
  let component: OrgchartComponent;
  let fixture: ComponentFixture<OrgchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
