import { Component, inject } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";
import { CardArticle } from "../card-article/card-article";
import { DataService } from "../data-service.js";

@Component({
  selector: "app-grid-article",
  imports: [RouterLink, CardArticle],
  templateUrl: "./grid-article.html",
  styleUrl: "./grid-article.css",
})
export class GridArticle {
  postsList;

  dataService = inject(DataService);
  constructor() {
    this.postsList = this.dataService.postsList;
  }
}
