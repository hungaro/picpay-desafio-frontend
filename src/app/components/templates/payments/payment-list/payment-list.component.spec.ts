import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Task } from 'src/app/models/task';

import { PaymentListComponent } from './payment-list.component';

describe('PaymentListComponent', () => {
  let component: PaymentListComponent;
  let fixture: ComponentFixture<PaymentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter tasks by name', () => {

    // ARRANGE
    const tasks: Task[] = [
      {
        "id": 1,
        "name": "Pennie Dumphries",
        "username": "pdumphries0",
        "title": "Dental Hygienist",
        "value": 19.96,
        "date": "2020-07-21T05:53:20Z",
        "image": "https://robohash.org/asperioresprovidentconsequuntur.png?size=150x150&set=set1",
        "isPayed": true
      },
      {
        "id": 2,
        "name": "Foster Orthmann",
        "username": "forthmann1",
        "title": "Professor",
        "value": 207.36,
        "date": "2021-01-28T14:01:29Z",
        "image": "https://robohash.org/quasetqui.png?size=150x150&set=set1",
        "isPayed": true
      },
      {
        "id": 3,
        "name": "Crissie Summerill",
        "username": "csummerill2",
        "title": "VP Product Management",
        "value": 464.54,
        "date": "2020-02-09T18:20:32Z",
        "image": "https://robohash.org/natusinciduntsapiente.png?size=150x150&set=set1",
        "isPayed": false
      },
      {
        "id": 4,
        "name": "Raphael",
        "username": "lcrolly3",
        "title": "Web Developer I",
        "value": 183.58,
        "date": "2021-07-10T20:39:48Z",
        "image": "https://robohash.org/estveniamet.png?size=150x150&set=set1",
        "isPayed": false
      }
    ];
    component.tasks = tasks;
    let expectedLengthFiltered = 1;

    // ACT
    let tasksFiltered = component.filter("Raphael");

    // ASSERT
    expect(tasksFiltered).toHaveSize(expectedLengthFiltered);
  });
});
