import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild
} from "@angular/core";

import {
  debounceTime,
  distinctUntilChanged,
  exhaustMap,
  map,
  merge,
  take
} from "rxjs/operators";
import { fromEvent, interval } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("mySelect") mySelect: ElementRef;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    //map((event:any) => event.currentTarget.value)
    const scrollEvent = fromEvent(document, "scroll")
      .pipe(
        map(event => event),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(evt => {
        console.log(evt);
      });
  }
}
