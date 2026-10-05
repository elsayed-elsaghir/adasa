import { Component, inject } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";
import { DataService } from "../data-service.js";

@Component({
  selector: "app-about-us",
  imports: [RouterLink],
  templateUrl: "./about-us.html",
  styleUrl: "./about-us.css",
})
export class AboutUs {
  postsList;

  private readonly dataService = inject(DataService);

  constructor() {
    this.postsList = this.dataService.postsList;
  }
}
