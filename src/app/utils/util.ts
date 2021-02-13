import { Observable } from "rxjs";

export function createHttpObservable(url: string) {
  return Observable.create(observer => {
    console.log(url);
    fetch(url)
      .then(response => {
        return response.json(); // return promise
      })
      .then(body => {
        console.log(body);
        observer.next(body);
        observer.complete();
      })
      .catch(err => {
        observer.error(err);
      });
  });
}
