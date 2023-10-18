import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncoomeComponent } from './incoome.component';

describe('IncoomeComponent', () => {
  let component: IncoomeComponent;
  let fixture: ComponentFixture<IncoomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncoomeComponent]
    });
    fixture = TestBed.createComponent(IncoomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
