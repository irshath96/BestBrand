import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligiousProductsComponent } from './religious-products.component';

describe('ReligiousProductsComponent', () => {
  let component: ReligiousProductsComponent;
  let fixture: ComponentFixture<ReligiousProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReligiousProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReligiousProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
