import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragerackComponent } from './storagerack.component';

describe('StoragerackComponent', () => {
  let component: StoragerackComponent;
  let fixture: ComponentFixture<StoragerackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoragerackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragerackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
