import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classroom } from './classroom';
import {AbstractMockObservableService} from "../mocks/mock.service";
import {ApiService} from "../_services/api.service";

class MockApiService extends AbstractMockObservableService {
  getClassroom(): any {
    this.content = [];
    return this;
  }
}

describe('NewComponentComponent', () => {
  let component: Classroom;
  let fixture: ComponentFixture<Classroom>;
  let mockService;

  beforeEach(async () => {
    mockService = new MockApiService();
    await TestBed.configureTestingModule({
      providers: [{provide: ApiService, useValue: mockService}],
      declarations: [ Classroom ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Classroom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
