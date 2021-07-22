# Difference between Promises and Observables

1. [Single use vs muntiple use](#Single use vs muntiple use)
2. [Eager Vs lazy](#Eager Vs lazy)
3. [Cancellable](#Cancellable)
4. [Multicating](#Multicating)
5. [Cahining](#Cahining)
6. [Complete Vs Incomplete](#Complete Vs Incomplete)


## Single use vs muntiple use

Promises are Single use wher as Observables are multiple use.

```javascript
// API
let p = new Promise((res, rej) => {
  setInterval(() => {
    res('Promise resolved ');
  }, 2000);
});

let o: Observable<string> = new Observable(observer => {
  // some code in here, something async
  setInterval(() => {
    observer.next('Obs Next ');
  }, 1000);
});

// Somewhere else in the code
p.then(res => {
  console.log('Promise Result:', res);
});

o.subscribe(res => {
  console.log('Observable Result:', res);
});

```

## Eager Vs lazy

promises are eager i.e they will get resolved even if no one is listening for them, where as Observables are lazy and will start only if they are subscribed to.

```javascript

let p = new Promise((res, rej) => {
  console.log('Turning on Promise');
  res('Promise resolved');
});

let o = new Observable(observer => {
  console.log('Turning on Observable');
  observer.next('observer resoled');
});

o.subscribe(res => {
  console.log(res);
});

```
## Cancellable

It is very easy to cancel Observables just by calling the unsubscrbe method on the subscription, hence preventing memory leaks.

```javascript
let o = new Observable(observer => {
  setInterval(() => {
    observer.next('Obs Next');
  }, 1000);
});

let sub: Subscription = o.subscribe(res => {
  console.log('observable res :', res);
});

// unsubscrbes after 3 secs
setTimeout(() => {
  sub.unsubscribe();
}, 3000);

```
## Multicating 
Its very easy to multicast an observable to different subscribers.

```javascript
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

```
## Cahining
## Complete Vs Incomplete


