import { Component } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-main-page",
  imports: [RouterLink],
  templateUrl: "./main-page.html",
  styleUrl: "./main-page.css",
})
export class MainPage {
  postsList = postsList;
}
