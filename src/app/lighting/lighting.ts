import { Component } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";
import { CardArticle } from "../card-article/card-article";

@Component({
  selector: "app-lighting",
  imports: [RouterLink, CardArticle],
  templateUrl: "./lighting.html",
  styleUrl: "./lighting.css",
})
export class Lighting {
  postsList = postsList;
  category: string = "إضاءة";
}
