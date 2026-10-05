import { Component, inject } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";
import { DataService } from "../data-service.js";

@Component({
  selector: "app-list-article",
  imports: [RouterLink],
  templateUrl: "./list-article.html",
  styleUrl: "./list-article.css",
})
export class ListArticle {
  postsList;

  dataService = inject(DataService);
  constructor() {
    this.postsList = this.dataService.postsList;
  }
}
