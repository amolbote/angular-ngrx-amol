import { Component, OnInit, VERSION } from "@angular/core";
import { noop, Observable } from "rxjs";
import { map } from "rxjs/operators";
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

    //this.http$.subscribe(data => console.log(data));
    this.courses$ = this.http$.pipe(map(courses => Object.values(courses)));

    this.beginnerCourses$ = this.courses$.pipe(
      map(courses => courses.filter(course => course.category === "BEGINNER"))
    );
    this.advancedCourses$ = this.courses$.pipe(
      map(courses => courses.filter(course => course.category === "ADVANCED"))
    );
  }
}
