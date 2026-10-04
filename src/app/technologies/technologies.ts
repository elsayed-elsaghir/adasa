import { Component } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";
import { CardArticle } from "../card-article/card-article";

@Component({
  selector: "app-technologies",
  imports: [RouterLink, CardArticle],
  templateUrl: "./technologies.html",
  styleUrl: "./technologies.css",
})
export class Technologies {
  postsList = postsList;
  category: string = "تقنيات";
}
