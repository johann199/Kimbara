import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarBailarinComponent } from './agregar-bailarin.component';

describe('AgregarBailarinComponent', () => {
  let component: AgregarBailarinComponent;
  let fixture: ComponentFixture<AgregarBailarinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarBailarinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarBailarinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
