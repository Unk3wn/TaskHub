import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUserComponent } from './board-user.component';
import {AbstractMockObservableService} from "../mocks/mock.service";
import {ApiService} from "../_services/api.service";

class MockApiService extends AbstractMockObservableService {
  getAllTeams(): any {
    this.content = [];
    return this;
  }
}

describe('BoardUserComponent', () => {
  let component: BoardUserComponent;
  let fixture: ComponentFixture<BoardUserComponent>;
  let mockService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{provide: ApiService, useValue: mockService}],
      declarations: [ BoardUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
