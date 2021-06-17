import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTaskComponent } from './board-task.component';
import {AbstractMockObservableService} from "../mocks/mock.service";
import {SolutionService} from "../_services/solution.service";
import {TaskService} from "../_services/task.service";
import {TeamService} from "../_services/team.service";

class MockApiService extends AbstractMockObservableService {
  createSolutions(): any {
    this.content = [];
    return this;
  }
}

describe('BoardTaskComponent', () => {
  let component: BoardTaskComponent;
  let fixture: ComponentFixture<BoardTaskComponent>;
  let mockService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{provide: SolutionService, useValue: mockService},{provide: TaskService, useValue: mockService},{provide: TeamService, useValue: mockService}],
      declarations: [ BoardTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
