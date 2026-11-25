import { TestBed } from '@angular/core/testing';
import { Useapi } from './useapi';

describe('Useapi', () => {
  let service: Useapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Useapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
