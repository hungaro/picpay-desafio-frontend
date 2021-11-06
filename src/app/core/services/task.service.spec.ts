import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { throwError } from 'rxjs';

import { environment } from '@environments/environment';

import { Task } from '@models/task.model';

import { TaskService } from './task.service';

describe('AccountService', () => {
  let service: TaskService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  const RESPONSE_ERROR_MOCK = { status: 400 };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService],
    }).compileComponents();
  });

  beforeEach(() => {
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TaskService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should not immediately connect to the server', () => {
    httpMock.expectNone({});
  });

  describe('retrieveTasks', () => {
    const RESPONSE_MOCK: Task[] = [
      {
        id: 1,
        name: 'Pennie Dumphries',
        username: 'pdumphries0',
        title: 'Dental Hygienist',
        value: 19.96,
        date: '2020-07-21T05:53:20Z',
        image: 'https://robohash.org/asperioresprovidentconsequuntur.png?size=150x150&set=set1',
        isPayed: true,
      },
      {
        id: 2,
        name: 'Foster Orthmann',
        username: 'forthmann1',
        title: 'Professor',
        value: 207.36,
        date: '2021-01-28T14:01:29Z',
        image: 'https://robohash.org/quasetqui.png?size=150x150&set=set1',
        isPayed: true,
      },
      {
        id: 3,
        name: 'Crissie Summerill',
        username: 'csummerill2',
        title: 'VP Product Management',
        value: 464.54,
        date: '2020-02-09T18:20:32Z',
        image: 'https://robohash.org/natusinciduntsapiente.png?size=150x150&set=set1',
        isPayed: false,
      },
    ];

    it('should retrieve tasks', () => {
      const url = `${environment.baseUrl}${environment.endpoints.task}`;

      service.retrieveTasks().subscribe((response: Task[]) => {
        expect(response).toEqual(RESPONSE_MOCK);
      });

      const requestMock = httpMock.expectOne((req) => {
        return req.method === 'GET' && req.url === url;
      });

      requestMock.flush(RESPONSE_MOCK);
    });

    it('should throw error when service return error', () => {
      let responseError;

      jest.spyOn(httpClient, 'get').mockReturnValue(throwError(RESPONSE_ERROR_MOCK));

      service.retrieveTasks().subscribe(
        () => {},
        (error) => {
          responseError = error;
        },
      );

      expect(responseError).toEqual(RESPONSE_ERROR_MOCK);
    });
  });

  describe('retrieveTask', () => {
    const RESPONSE_MOCK: Task = {
      id: 1,
      name: 'Pennie Dumphries',
      username: 'pdumphries0',
      title: 'Dental Hygienist',
      value: 19.96,
      date: '2020-07-21T05:53:20Z',
      image: 'https://robohash.org/asperioresprovidentconsequuntur.png?size=150x150&set=set1',
      isPayed: true,
    };

    const TASK_ID = 1;

    it('should retrieve task', () => {
      const url = `${environment.baseUrl}${environment.endpoints.task}/${TASK_ID}`;

      service.retrieveTask(TASK_ID).subscribe((response: Task) => {
        expect(response).toEqual(RESPONSE_MOCK);
      });

      const requestMock = httpMock.expectOne((req) => {
        return req.method === 'GET' && req.urlWithParams === url;
      });

      requestMock.flush(RESPONSE_MOCK);
    });

    it('should throw error when service return error', () => {
      let responseError;

      jest.spyOn(httpClient, 'get').mockReturnValue(throwError(RESPONSE_ERROR_MOCK));

      service.retrieveTasks().subscribe(
        () => {},
        (error) => {
          responseError = error;
        },
      );

      expect(responseError).toEqual(RESPONSE_ERROR_MOCK);
    });
  });

  describe('createTask', () => {
    const REQUEST_MOCK: Omit<Task, 'id'> = {
      name: 'Pennie Dumphries',
      username: 'pdumphries0',
      title: 'Dental Hygienist',
      value: 19.96,
      date: '2020-07-21T05:53:20Z',
      image: 'https://robohash.org/asperioresprovidentconsequuntur.png?size=150x150&set=set1',
      isPayed: true,
    };

    const RESPONSE_MOCK: Task = {
      id: 1,
      name: 'Pennie Dumphries',
      username: 'pdumphries0',
      title: 'Dental Hygienist',
      value: 19.96,
      date: '2020-07-21T05:53:20Z',
      image: 'https://robohash.org/asperioresprovidentconsequuntur.png?size=150x150&set=set1',
      isPayed: true,
    };

    it('should create task', () => {
      const url = `${environment.baseUrl}${environment.endpoints.task}`;

      service.createTask(REQUEST_MOCK).subscribe((response: Task) => {
        expect(response).toEqual(RESPONSE_MOCK);
      });

      const requestMock = httpMock.expectOne((req) => {
        return req.method === 'POST' && req.url === url && req.body === REQUEST_MOCK;
      });

      requestMock.flush(RESPONSE_MOCK);
    });

    it('should throw error when service return error', () => {
      let responseError;

      jest.spyOn(httpClient, 'get').mockReturnValue(throwError(RESPONSE_ERROR_MOCK));

      service.retrieveTasks().subscribe(
        () => {},
        (error) => {
          responseError = error;
        },
      );

      expect(responseError).toEqual(RESPONSE_ERROR_MOCK);
    });
  });

  describe('deleteTask', () => {
    const RESPONSE_MOCK = {};

    const TASK_ID = 1;

    it('should delete task', () => {
      const url = `${environment.baseUrl}${environment.endpoints.task}/${TASK_ID}`;

      service.deleteTask(TASK_ID).subscribe((response: {}) => {
        expect(response).toEqual(RESPONSE_MOCK);
      });

      const requestMock = httpMock.expectOne((req) => {
        return req.method === 'DELETE' && req.urlWithParams === url;
      });

      requestMock.flush(RESPONSE_MOCK);
    });

    it('should throw error when service return error', () => {
      let responseError;

      jest.spyOn(httpClient, 'get').mockReturnValue(throwError(RESPONSE_ERROR_MOCK));

      service.retrieveTasks().subscribe(
        () => {},
        (error) => {
          responseError = error;
        },
      );

      expect(responseError).toEqual(RESPONSE_ERROR_MOCK);
    });
  });

  describe('updateAllTask', () => {
    const REQUEST_MOCK: Omit<Task, 'id'> = {
      name: 'Pennie Dumphries',
      username: 'pdumphries0',
      title: 'Dental Hygienist',
      value: 19.96,
      date: '2020-07-21T05:53:20Z',
      image: 'https://robohash.org/asperioresprovidentconsequuntur.png?size=150x150&set=set1',
      isPayed: true,
    };

    const RESPONSE_MOCK: Task = {
      id: 1,
      name: 'Pennie Dumphries',
      username: 'pdumphries0',
      title: 'Dental Hygienist',
      value: 19.96,
      date: '2020-07-21T05:53:20Z',
      image: 'https://robohash.org/asperioresprovidentconsequuntur.png?size=150x150&set=set1',
      isPayed: true,
    };

    const TASK_ID = 1;

    it('should update all task', () => {
      const url = `${environment.baseUrl}${environment.endpoints.task}/${TASK_ID}`;

      service.updateAllTask(TASK_ID, REQUEST_MOCK).subscribe((response: Task) => {
        expect(response).toEqual(RESPONSE_MOCK);
      });

      const requestMock = httpMock.expectOne((req) => {
        return req.method === 'PUT' && req.urlWithParams === url && req.body === REQUEST_MOCK;
      });

      requestMock.flush(RESPONSE_MOCK);
    });

    it('should throw error when service return error', () => {
      let responseError;

      jest.spyOn(httpClient, 'get').mockReturnValue(throwError(RESPONSE_ERROR_MOCK));

      service.retrieveTasks().subscribe(
        () => {},
        (error) => {
          responseError = error;
        },
      );

      expect(responseError).toEqual(RESPONSE_ERROR_MOCK);
    });
  });

  describe('updateTask', () => {
    const REQUEST_MOCK: Omit<Partial<Task>, 'id'> = {
      name: 'Pennie Dumphries',
      value: 19.96,
    };

    const RESPONSE_MOCK: Task = {
      id: 1,
      name: 'Pennie Dumphries',
      username: 'pdumphries0',
      title: 'Dental Hygienist',
      value: 19.96,
      date: '2020-07-21T05:53:20Z',
      image: 'https://robohash.org/asperioresprovidentconsequuntur.png?size=150x150&set=set1',
      isPayed: true,
    };

    const TASK_ID = 1;

    it('should update task', () => {
      const url = `${environment.baseUrl}${environment.endpoints.task}/${TASK_ID}`;

      service.updateTask(TASK_ID, REQUEST_MOCK).subscribe((response: Task) => {
        expect(response).toEqual(RESPONSE_MOCK);
      });

      const requestMock = httpMock.expectOne((req) => {
        return req.method === 'PATCH' && req.urlWithParams === url && req.body === REQUEST_MOCK;
      });

      requestMock.flush(RESPONSE_MOCK);
    });

    it('should throw error when service return error', () => {
      let responseError;

      jest.spyOn(httpClient, 'get').mockReturnValue(throwError(RESPONSE_ERROR_MOCK));

      service.retrieveTasks().subscribe(
        () => {},
        (error) => {
          responseError = error;
        },
      );

      expect(responseError).toEqual(RESPONSE_ERROR_MOCK);
    });
  });
});
