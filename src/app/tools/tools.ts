import { Component } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";
import { CardArticle } from "../card-article/card-article";

@Component({
  selector: "app-tools",
  imports: [RouterLink, CardArticle],
  templateUrl: "./tools.html",
  styleUrl: "./tools.css",
})
export class Tools {
  postsList = postsList;
  category: string = "معدات";
}
