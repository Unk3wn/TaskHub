import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdminComponent } from './board-admin.component';
import {AbstractMockObservableService} from "../mocks/mock.service";
import {ClassService} from "../_services/class.service";

class MockClassService extends AbstractMockObservableService {
  createClass(): any {
    this.content = [];
    return this;
  }
}

describe('BoardAdminComponent', () => {
  let component: BoardAdminComponent;
  let fixture: ComponentFixture<BoardAdminComponent>;
  let mockService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{provide: ClassService, useValue: mockService}],
      declarations: [ BoardAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
