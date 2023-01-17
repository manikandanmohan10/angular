import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleTaskComponent } from './triangle-task.component';

describe('TriangleTaskComponent', () => {
  let component: TriangleTaskComponent;
  let fixture: ComponentFixture<TriangleTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriangleTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriangleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
