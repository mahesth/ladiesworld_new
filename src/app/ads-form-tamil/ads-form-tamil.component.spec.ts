import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsFormTamilComponent } from './ads-form-tamil.component';

describe('AdsFormTamilComponent', () => {
  let component: AdsFormTamilComponent;
  let fixture: ComponentFixture<AdsFormTamilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsFormTamilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsFormTamilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
