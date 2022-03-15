import './style.css';

import { Observable } from 'rxjs';

const Observable$ = (arr) => {
  return new Observable((subscriber) => {
    for (let item of arr) {
      subscriber.next(item);
    }
  });
};
const data = [5, 4, 6, 7, 8, 9, 10];

const observable = Observable$(data);

observable.subscribe((val) => console.log('Subscriber 1: ' + val));
observable.subscribe((val) => console.log('Subscriber 2: ' + val));
