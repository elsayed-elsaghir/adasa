import { Component } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-grid-article",
  imports: [RouterLink],
  templateUrl: "./grid-article.html",
  styleUrl: "./grid-article.css",
})
export class GridArticle {
  postsList = postsList;
}
