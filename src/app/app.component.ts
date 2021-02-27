import { Component, OnInit, VERSION } from "@angular/core";

import { merge } from "rxjs/operators";
import { interval } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const first = interval(2500);
    const second = interval(1000);
    const example = first.pipe(merge(second));
    example.subscribe(console.log);
  }
}
