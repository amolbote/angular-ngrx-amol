import { Component, OnInit, VERSION } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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

    //this.http$.subscribe(data => console.log(data));
    this.courses$ = this.http$.pipe(map(courses => Object.values(courses)));
    this.courses$.subscribe(data => console.log(data));
  }
}
