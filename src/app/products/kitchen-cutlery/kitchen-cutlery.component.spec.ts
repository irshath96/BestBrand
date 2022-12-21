import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenCutleryComponent } from './kitchen-cutlery.component';

describe('KitchenCutleryComponent', () => {
  let component: KitchenCutleryComponent;
  let fixture: ComponentFixture<KitchenCutleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenCutleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenCutleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
