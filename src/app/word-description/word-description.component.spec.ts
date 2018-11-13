import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDescriptionComponent } from './word-description.component';

describe('WordDescriptionComponent', () => {
  let component: WordDescriptionComponent;
  let fixture: ComponentFixture<WordDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
