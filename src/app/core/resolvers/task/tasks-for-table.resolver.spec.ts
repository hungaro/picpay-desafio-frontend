import { TestBed } from '@angular/core/testing';

import { TasksForTableResolver } from './tasks-for-table.resolver';

describe('TasksForTableResolver', () => {
  let resolver: TasksForTableResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TasksForTableResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
