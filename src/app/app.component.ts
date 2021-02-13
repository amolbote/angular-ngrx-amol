import { Component, OnInit, VERSION } from "@angular/core";
import { Observable } from "rxjs";
import { createHttpObservable } from "./utils/util";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  url: string = "https://my-json-server.typicode.com/amolbote/jsondata/courses";

  http$: Observable<any>;
  courses$: Observable<any>;
  ngOnInit(): void {
    this.http$ = createHttpObservable(this.url);
    this.http$.pipe(map(data => data)).subscribe(data1 => console.log(data1));
    // this.http$.subscribe(data => console.log(data));
    // this.courses$ = http$.pipe(map(courses => Object.values(courses)));
    // this.courses$.subscribe(data => console.log(data));
  }
}
