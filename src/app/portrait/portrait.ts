import { Component, inject } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";
import { CardArticle } from "../card-article/card-article";
import { DataService } from "../data-service.js";

@Component({
  selector: "app-portrait",
  imports: [RouterLink, CardArticle],
  templateUrl: "./portrait.html",
  styleUrl: "./portrait.css",
})
export class Portrait {
  postsList;
  category: string = "بورتريه";

  dataService = inject(DataService);
  constructor() {
    this.postsList = this.dataService.postsList;
  }
}
