import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsProductComponent } from './ds-product.component';

describe('DsProductComponent', () => {
  let component: DsProductComponent;
  let fixture: ComponentFixture<DsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
