import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintessentialComponent } from './quintessential.component';

describe('QuintessentialComponent', () => {
  let component: QuintessentialComponent;
  let fixture: ComponentFixture<QuintessentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintessentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintessentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
