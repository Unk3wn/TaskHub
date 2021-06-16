import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import {AbstractMockObservableService} from "../mocks/mock.service";
import {ApiService} from "../_services/api.service";

class MockApiService extends AbstractMockObservableService {
  getTask(): any {
    this.content = [];
    return this;
  }
}

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let mockService;

  beforeEach(async () => {
    mockService = new MockApiService();
    await TestBed.configureTestingModule({
      providers: [{provide: ApiService, useValue: mockService}],
      declarations: [ TaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
