import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {AbstractMockObservableService} from "../mocks/mock.service";

describe('UserService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
