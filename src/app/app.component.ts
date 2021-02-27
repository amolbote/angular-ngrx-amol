import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild
} from "@angular/core";

import { exhaustMap, merge, take } from "rxjs/operators";
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
    fromEvent(document, "scroll").subscribe(val =>
      console.log(this.mySelect.nativeElement.value)
    );
  }
}
