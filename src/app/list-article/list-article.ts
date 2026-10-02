import { Component } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-list-article",
  imports: [RouterLink],
  templateUrl: "./list-article.html",
  styleUrl: "./list-article.css",
})
export class ListArticle {
  postsList = postsList;
}
