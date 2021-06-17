import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardModeratorComponent } from './board-moderator.component';
import {AbstractMockObservableService} from "../mocks/mock.service";
import {TaskService} from "../_services/task.service";

class MockApiService extends AbstractMockObservableService {
  createTask(): any {
    this.content = [];
    return this;
  }
}

describe('BoardModeratorComponent', () => {
  let component: BoardModeratorComponent;
  let fixture: ComponentFixture<BoardModeratorComponent>;
  let mockService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{provide: TaskService, useValue: mockService}],
      declarations: [ BoardModeratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
