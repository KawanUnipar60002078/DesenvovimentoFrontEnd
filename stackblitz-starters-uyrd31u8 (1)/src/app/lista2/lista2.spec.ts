import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista2 } from './lista2';

describe('Lista2', () => {
  let component: Lista2;
  let fixture: ComponentFixture<Lista2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lista2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lista2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
