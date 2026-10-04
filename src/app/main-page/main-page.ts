import { Component } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";
import { CardArticle } from "../card-article/card-article";

@Component({
  selector: "app-main-page",
  imports: [RouterLink, CardArticle],
  templateUrl: "./main-page.html",
  styleUrl: "./main-page.css",
})
export class MainPage {
  postsList = postsList;
}
