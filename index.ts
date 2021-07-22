import { of, Observable, Subscription, observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
console.clear();

//// Single use vs Muntiple use

// // API
// let p = new Promise((res, rej) => {
//   setInterval(() => {
//     res('Promise resolved ');
//   }, 2000);
// });

// let o: Observable<string> = new Observable(observer => {
//   // some code in here, something async
//   setInterval(() => {
//     observer.next('Obs Next ');
//   }, 1000);
// });

// // Somewhere else in the code
// p.then(res => {
//   console.log('Promise Result:', res);
// });

// o.subscribe(res => {
//   console.log('Observable Result:', res);
// });

//// Eagar Vs Lazy

// let p = new Promise((res, rej) => {
//   console.log('Turning on Promise');
//   res('Promise resolved');
// });

// let o = new Observable(observer => {
//   console.log('Turning on Observable');
//   observer.next('observer resoled');
// });

// o.subscribe(res => {
//   console.log(res);
// });

//// cancelable

// let o = new Observable(observer => {
//   setInterval(() => {
//     observer.next('Obs Next');
//   }, 1000);
// });

// let sub: Subscription = o.subscribe(res => {
//   console.log('observable res :', res);
// });

// setTimeout(() => {
//   sub.unsubscribe();
// }, 3000);

//// Multicating

let o = new Observable(observer => {
  console.log('Started Observable');
  observer.next('Obs Next');
}).pipe(shareReplay());

o.subscribe(res => {
  console.log('Observable res1', res);
});
o.subscribe(res => {
  console.log('Observable res2', res);
});
o.subscribe(res => {
  console.log('Observable res3', res);
});
o.subscribe(res => {
  console.log('Observable res4', res);
});
o.subscribe(res => {
  console.log('Observable res5', res);
});
