import { Component } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";
import { CardArticle } from "../card-article/card-article";

@Component({
  selector: "app-landscapes",
  imports: [RouterLink, CardArticle],
  templateUrl: "./landscapes.html",
  styleUrl: "./landscapes.css",
})
export class Landscapes {
  postsList = postsList;
  category: string = "مناظر طبيعية";
}
