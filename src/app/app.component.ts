import { Component } from "@angular/core";
import { WikipediaService } from "./wikipedia.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private wikipedia: WikipediaService) {}

  onSubmit(searchText: string) {
    this.wikipedia.search(searchText).subscribe((response) => {
      console.log(response);
    });
  }
}
