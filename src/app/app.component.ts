import { Component, OnInit, VERSION } from "@angular/core";
import { noop, Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { createHttpObservable } from "./utils/util";

interface Courses {
  category: string;
  courseListIcon: string;
  description: string;
  iconUrl: string;
  id: number;
  lessonsCount: number;
  longDescription: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  url: string = "https://my-json-server.typicode.com/amolbote/jsondata/courses";

  http$: Observable<Courses[]>;
  beginnerCourses$: Observable<Courses[]>;
  advancedCourses$: Observable<Courses[]>;
  courses$: Observable<Courses[]>;
  ngOnInit(): void {
    this.http$ = createHttpObservable(this.url);

    // shareReplay operator will make only one http call and
    // shares result with all subscribers (check network tab)
    this.courses$ = this.http$.pipe(
      map(courses => Object.values(courses)),
      shareReplay()
    );

    this.beginnerCourses$ = this.courses$.pipe(
      map(courses => courses.filter(course => course.category === "BEGINNER"))
    );
    this.advancedCourses$ = this.courses$.pipe(
      map(courses => courses.filter(course => course.category === "ADVANCED"))
    );
  }
}
