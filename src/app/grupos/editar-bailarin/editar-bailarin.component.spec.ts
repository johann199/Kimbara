import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBailarinComponent } from './editar-bailarin.component';

describe('EditarBailarinComponent', () => {
  let component: EditarBailarinComponent;
  let fixture: ComponentFixture<EditarBailarinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBailarinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarBailarinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
