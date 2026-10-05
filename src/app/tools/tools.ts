import { Component, inject } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";
import { CardArticle } from "../card-article/card-article";
import { DataService } from "../data-service.js";

@Component({
  selector: "app-tools",
  imports: [RouterLink, CardArticle],
  templateUrl: "./tools.html",
  styleUrl: "./tools.css",
})
export class Tools {
  postsList;
  category: string = "معدات";

  dataService = inject(DataService);
  constructor() {
    this.postsList = this.dataService.postsList;
  }
}
