import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtProductComponent } from './ct-product.component';

describe('CtProductComponent', () => {
  let component: CtProductComponent;
  let fixture: ComponentFixture<CtProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
