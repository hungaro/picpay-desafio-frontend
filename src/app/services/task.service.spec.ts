import { HttpClientModule } from "@angular/common/http";
import { inject, TestBed } from "@angular/core/testing";
import { TaskService } from "./task.service";

describe('TaskService', () => {

  let service: TaskService;
  
  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [ HttpClientModule ],
        providers: [ TaskService ] 
      });
    service = TestBed.inject(TaskService);
  });
  
  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));
  
});
