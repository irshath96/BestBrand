import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlourComponent } from './flour.component';

describe('FlourComponent', () => {
  let component: FlourComponent;
  let fixture: ComponentFixture<FlourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
