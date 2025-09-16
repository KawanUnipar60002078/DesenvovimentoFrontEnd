import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista1 } from './lista1';

describe('Lista1', () => {
  let component: Lista1;
  let fixture: ComponentFixture<Lista1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lista1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lista1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
