import { Component } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";
import { CardArticle } from "../card-article/card-article";

@Component({
  selector: "app-portrait",
  imports: [RouterLink, CardArticle],
  templateUrl: "./portrait.html",
  styleUrl: "./portrait.css",
})
export class Portrait {
  postsList = postsList;
  category: string = "بورتريه";
}
