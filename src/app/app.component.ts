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
  ngOnInit(): void {
    this.http$ = createHttpObservable(this.url);
  }
}
