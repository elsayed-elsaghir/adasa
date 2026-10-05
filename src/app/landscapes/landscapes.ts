import { Component, inject } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";
import { CardArticle } from "../card-article/card-article";
import { DataService } from "../data-service.js";

@Component({
  selector: "app-landscapes",
  imports: [RouterLink, CardArticle],
  templateUrl: "./landscapes.html",
  styleUrl: "./landscapes.css",
})
export class Landscapes {
  postsList;
  category: string = "مناظر طبيعية";

  dataService = inject(DataService);
  constructor() {
    this.postsList = this.dataService.postsList;
  }
}
