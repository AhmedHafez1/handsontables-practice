import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsTableComponent } from './hands-table.component';

describe('HandsTableComponent', () => {
  let component: HandsTableComponent;
  let fixture: ComponentFixture<HandsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
