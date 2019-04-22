import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBookItemComponent } from './test-book-item.component';

describe('TestBookItemComponent', () => {
  let component: TestBookItemComponent;
  let fixture: ComponentFixture<TestBookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBookItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
