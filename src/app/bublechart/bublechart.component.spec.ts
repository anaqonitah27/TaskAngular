import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BublechartComponent } from './bublechart.component';

describe('BublechartComponent', () => {
  let component: BublechartComponent;
  let fixture: ComponentFixture<BublechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BublechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BublechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
